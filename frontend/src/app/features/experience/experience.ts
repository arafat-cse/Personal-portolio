import { Component, OnInit, signal } from '@angular/core';
import { Experience, ExperienceService } from '../../core/services/experience';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent implements OnInit {
  experience = signal<Experience[]>([]);

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe({
      next: (data) => this.experience.set(data),
      error: (err) => console.error('Failed to load experience', err)
    });
  }

  isCurrentRole(endDate: string): boolean {
    return endDate.toLowerCase() === 'present';
  }

  getCareerStart(): string {
    const list = this.experience();
    if (!list.length) {
      return '-';
    }

    return list[list.length - 1].startDate;
  }

  getUniqueTechCount(): number {
    const unique = new Set(
      this.experience().flatMap((item) => item.technologies.map((tech) => tech.toLowerCase()))
    );
    return unique.size;
  }
}
