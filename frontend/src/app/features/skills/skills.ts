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

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe({
      next: (data) => this.skills.set(data),
      error: (err) => console.error('Failed to load skills', err)
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills().filter(s => s.category === category);
  }
}
