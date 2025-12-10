import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  private apiUrl = 'http://localhost:5000/api/skills';

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.apiUrl, skill);
  }
}
