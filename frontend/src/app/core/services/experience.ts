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
      id: 0,
      role: 'Software Engineer',
      company: 'Mandsitbd.com',
      location: 'Mirpur, Dhaka, Bangladesh',
      startDate: 'January 2026',
      endDate: 'Present',
      description: [
        'Working with Angular, React, Next.js, Laravel, Strapi and Node.js to develop web applications.',
        'Collaborating with cross-functional teams to deliver high-quality software solutions.',
        'Participating in code reviews and contributing to architectural decisions.'
      ],
      technologies: ['Angular', 'React', 'Next.js', 'Laravel', 'Strapi', 'Node.js']
    },
    {
      id: 1,
      role: 'Junior Developer',
      company: 'Hybritech Innovations Ltd.',
      location: 'Banasree Rampura, Dhaka, Bangladesh',
      startDate: 'July 2025',
      endDate: 'Present',
      description: [
        'Working with Angular, React, Laravel, and OData to develop web applications.',
        'Collaborating with cross-functional teams to deliver high-quality software solutions.',
        'Participating in code reviews and contributing to architectural decisions.'
      ],
      technologies: ['Angular', 'React', 'Laravel', 'OData']
    },
    {
      id: 2,
      role: 'Software Engineer',
      company: 'US Software Limited',
      location: 'Dhaka, Bangladesh',
      startDate: 'July 2024',
      endDate: 'Dec 2024',
      description: [
        'Worked on ASP.NET, C#, and Angular to develop robust web applications.',
        'Implemented scalable backend services and optimized database queries.',
        'Ensured application performance and security best practices.'
      ],
      technologies: ['ASP.NET', 'C#', 'Angular', 'SQL Server']
    },
    {
      id: 3,
      role: 'Software Testing Specialist',
      company: 'Bio-Xin Cosmeceuticals',
      location: 'Dhaka, Bangladesh',
      startDate: 'Jan 2023',
      endDate: 'June 2024',
      description: [
        'Experienced in API testing, ensuring seamless communication between services.',
        'Skilled in using tools like Postman and Swagger for functional, performance, and security testing.',
        'Responsible for identifying and reporting bugs, verifying fixes, and improving software reliability.'
      ],
      technologies: ['Postman', 'Swagger', 'API Testing', 'QA']
    },
    {
      id: 4,
      role: 'Frontend Designer',
      company: 'Brandlly',
      location: 'Dhaka, Bangladesh',
      startDate: 'June 2022',
      endDate: 'Dec 2022',
      description: [
        'Developed and maintained applications using HTML5, CSS3, JavaScript, Bootstrap5, and TailwindCSS.',
        'Translated UI/UX design wireframes into high-quality code.',
        'Optimized applications for maximum speed and scalability.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap5', 'TailwindCSS']
    },
    {
      id: 5,
      role: 'Full Stack Web Developer (Intern)',
      company: 'Unicorns Codes Ltd.',
      location: 'Dhaka, Bangladesh',
      startDate: 'June 2021',
      endDate: 'Dec 2021',
      description: [
        'Developed and maintained applications using HTML5, CSS, JavaScript, and Bootstrap5.',
        'Assisted in the development of backend modules and database schemas.',
        'Gained hands-on experience in full-stack web development workflows.'
      ],
      technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap5']
    }
  ];

  constructor() { }

  getExperience(): Observable<Experience[]> {
    return of(this.mockExperience);
  }
}
