import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private mockProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce application with product catalog, shopping cart, and secure checkout.',
      imageUrl: 'https://placehold.co/600x400/indigo/white?text=E-Commerce',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Stripe'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      imageUrl: 'https://placehold.co/600x400/purple/white?text=Task+App',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase skills, projects, and experience.',
      imageUrl: 'https://placehold.co/600x400/blue/white?text=Portfolio',
      technologies: ['Angular', 'Tailwind CSS'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.mockProjects);
  }

  getProject(id: number): Observable<Project | undefined> {
    return of(this.mockProjects.find(p => p.id === id));
  }
}
