import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string; // 'Present' or date string
  description: string[];
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private mockExperience: Experience[] = [
    {
      id: 1,
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'New York, NY',
      startDate: 'Jan 2022',
      endDate: 'Present',
      description: [
        'Lead a team of 5 developers in building scalable web applications.',
        'Architected and implemented a microservices-based backend using ASP.NET Core.',
        'Optimized frontend performance, reducing load times by 40%.'
      ],
      technologies: ['Angular', '.NET Core', 'Azure', 'Docker']
    },
    {
      id: 2,
      role: 'Software Engineer',
      company: 'Digital Innovations',
      location: 'San Francisco, CA',
      startDate: 'Jun 2019',
      endDate: 'Dec 2021',
      description: [
        'Developed and maintained multiple client-facing web applications.',
        'Collaborated with UX/UI designers to implement responsive designs.',
        'Integrated third-party APIs for payment processing and data analytics.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
    }
  ];

  constructor() { }

  getExperience(): Observable<Experience[]> {
    return of(this.mockExperience);
  }
}
