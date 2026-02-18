import { Component, OnInit, signal } from '@angular/core';
import { Skill, SkillsService } from '../../core/services/skills';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent implements OnInit {
  skills = signal<Skill[]>([]);
  readonly categories: Skill['category'][] = ['Frontend', 'Backend', 'Tools', 'Other'];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe({
      next: (data) => this.skills.set(data),
      error: (err) => console.error('Failed to load skills', err)
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills()
      .filter((s) => s.category === category)
      .sort((a, b) => b.proficiency - a.proficiency);
  }

  getTopSkills(limit = 4): Skill[] {
    return [...this.skills()]
      .sort((a, b) => b.proficiency - a.proficiency)
      .slice(0, limit);
  }

  getAverageByCategory(category: Skill['category']): number {
    const items = this.getSkillsByCategory(category);
    if (!items.length) {
      return 0;
    }

    const total = items.reduce((sum, item) => sum + item.proficiency, 0);
    return Math.round(total / items.length);
  }

  getOverallAverage(): number {
    const items = this.skills();
    if (!items.length) {
      return 0;
    }

    const total = items.reduce((sum, item) => sum + item.proficiency, 0);
    return Math.round(total / items.length);
  }

  getStrongestCategory(): Skill['category'] {
    const categoryScores = this.categories
      .map((category) => ({
        category,
        score: this.getAverageByCategory(category),
      }))
      .sort((a, b) => b.score - a.score);

    return categoryScores[0]?.category ?? 'Frontend';
  }

  getSkillTone(proficiency: number): string {
    if (proficiency >= 85) return 'Expert';
    if (proficiency >= 70) return 'Advanced';
    if (proficiency >= 55) return 'Intermediate';
    return 'Learning';
  }
}
