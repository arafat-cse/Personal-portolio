import { HttpClient } from '@angular/common/http';
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
  category: 'Website' | 'Mobile' | 'Desktop' | 'Other';
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = 'https://localhost:7085/api/projects';

  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with product management, shopping cart, and secure checkout.',
      imageUrl: 'https://placehold.co/600x400/4F46E5/FFFFFF/png?text=E-Commerce',
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server'],
      demoUrl: 'https://ecommerce.example.com',
      githubUrl: 'https://github.com/username/ecommerce',
      category: 'Website'
    },
    {
      id: 2,
      title: 'Task Master App',
      description: 'A productivity mobile application for managing daily tasks and team collaboration.',
      imageUrl: 'https://placehold.co/600x400/10B981/FFFFFF/png?text=Task+Master',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/username/task-master',
      category: 'Mobile'
    },
    {
      id: 3,
      title: 'Corporate CRM',
      description: 'Customer Relationship Management system for tracking leads and sales pipelines.',
      imageUrl: 'https://placehold.co/600x400/F59E0B/FFFFFF/png?text=CRM+System',
      technologies: ['Laravel', 'Vue.js', 'MySQL'],
      demoUrl: 'https://crm.example.com',
      category: 'Website'
    },
    {
      id: 4,
      title: 'Social Connect',
      description: 'Real-time social networking platform with chat and media sharing capabilities.',
      imageUrl: 'https://placehold.co/600x400/EC4899/FFFFFF/png?text=Social+App',
      technologies: ['React.js', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/username/social-connect',
      demoUrl: 'https://social.example.com',
      category: 'Website'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and personal health goals.',
      imageUrl: 'https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Fitness+App',
      technologies: ['React Native', 'Redux', 'Express.js'],
      githubUrl: 'https://github.com/username/fitness-tracker',
      category: 'Mobile'
    },
    {
      id: 6,
      title: 'Server Management Tool',
      description: 'Web-based dashboard for monitoring and managing VPS instances.',
      imageUrl: 'https://placehold.co/600x400/6366F1/FFFFFF/png?text=VPS+Manager',
      technologies: ['Angular', 'Node.js', 'Docker'],
      githubUrl: 'https://github.com/username/vps-manager',
      category: 'Website'
    }
  ];

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    // return this.http.get<Project[]>(this.apiUrl);
    return of(this.projects);
  }

  getProject(id: number): Observable<Project | undefined> {
    // return this.http.get<Project>(`${this.apiUrl}/${id}`);
    return of(this.projects.find(p => p.id === id));
  }

  addProject(project: Project): Observable<Project> {
    // return this.http.post<Project>(this.apiUrl, project);
    this.projects.push(project);
    return of(project);
  }
}
