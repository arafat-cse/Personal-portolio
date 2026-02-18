import { Component, OnInit, signal } from '@angular/core';
import { Profile, ProfileService } from '../../core/services/profile';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent implements OnInit {
  profile = signal<Profile | null>(null);
  readonly quickStats = [
    { label: 'Years Experience', value: '1.5+' },
    { label: 'Projects Delivered', value: '20+' },
    { label: 'Core Stacks', value: 'Angular + .NET' },
  ];

  readonly focusAreas = [
    'Scalable frontend architecture',
    'API-first backend development',
    'Clean, testable, maintainable code',
    'Performance and UX optimization',
  ];

  readonly education = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institute: 'Southeast University',
      year: '2023 - Present',
      summary: 'Advancing software engineering, distributed systems, and practical product development.',
    },
    {
      degree: 'Diploma in Computer Science & Technology',
      institute: 'Khulna Polytechnic Institute',
      year: '2022',
      summary: 'Built strong foundations in algorithms, networking, and software implementation.',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institute: 'Kakbasia Bangabandhu Secondary School',
      year: '2017',
      summary: 'Completed secondary education with strong academic performance.',
    },
  ];

  readonly journey = [
    {
      role: 'Junior Developer',
      company: 'Hybritech Innovations Ltd.',
      period: 'Jul 2025 - Present',
      details: 'Building production web apps with Angular, React, Laravel, and OData in cross-functional teams.',
    },
    {
      role: 'Software Engineer',
      company: 'US Software Limited',
      period: 'Jul 2024 - Dec 2024',
      details: 'Delivered ASP.NET + Angular solutions, improved backend quality, and optimized database queries.',
    },
    {
      role: 'Software Testing Specialist',
      company: 'Bio-Xin Cosmeceuticals',
      period: 'Jan 2023 - Jun 2024',
      details: 'Handled API testing, bug verification, and release reliability using Postman and Swagger.',
    },
  ];

  readonly interests = ['Photography', 'Traveling', 'Reading', 'Gaming'];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (data) => this.profile.set(data),
      error: (err) => console.error('Failed to load profile', err)
    });
  }
}
