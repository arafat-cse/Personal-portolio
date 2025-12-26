import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  avatarUrl: string;
  socialLinks: { platform: string; url: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // Mock data for now, replace with HttpClient call later
  private mockProfile: Profile = {
    name: 'Md Arafat Rahman',
    title: 'Full Stack Developer',
    bio: `I am a passionate Full Stack Developer with experience in building robust web applications using Angular and ASP.NET Core. 
          I love solving complex problems and creating efficient, scalable, and user-friendly solutions. 
          With a strong foundation in both frontend and backend technologies, I can handle the entire development lifecycle.`,
    email: 'arafat.dev61@gmail.com',
    location: 'Dhaka, Bangladesh',
    avatarUrl: 'assets/avatar-placeholder.png', // Ensure this exists or use a placeholder URL
    socialLinks: [
      { platform: 'GitHub', url: 'https://github.com' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' }
    ]
  };

  constructor() { }

  getProfile(): Observable<Profile> {
    // In a real app: return this.http.get<Profile>(`${environment.api}/profile`);
    return of(this.mockProfile);
  }
}
