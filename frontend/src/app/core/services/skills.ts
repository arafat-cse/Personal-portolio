import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Skill {
  id: number;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
  proficiency: number; // 0-100
  icon?: string; // Optional icon class or URL
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private mockSkills: Skill[] = [
    { id: 1, name: 'Angular', category: 'Frontend', proficiency: 90 },
    { id: 2, name: 'TypeScript', category: 'Frontend', proficiency: 85 },
    { id: 3, name: 'HTML/CSS', category: 'Frontend', proficiency: 95 },
    { id: 4, name: 'Tailwind CSS', category: 'Frontend', proficiency: 90 },
    { id: 5, name: 'C#', category: 'Backend', proficiency: 85 },
    { id: 6, name: 'ASP.NET Core', category: 'Backend', proficiency: 80 },
    { id: 7, name: 'SQL Server', category: 'Backend', proficiency: 75 },
    { id: 8, name: 'Entity Framework', category: 'Backend', proficiency: 80 },
    { id: 9, name: 'Git', category: 'Tools', proficiency: 90 },
    { id: 10, name: 'Docker', category: 'Tools', proficiency: 60 },
    { id: 11, name: 'Azure', category: 'Tools', proficiency: 50 },
  ];

  constructor() { }

  getSkills(): Observable<Skill[]> {
    return of(this.mockSkills);
  }
}
