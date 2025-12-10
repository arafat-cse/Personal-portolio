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

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (data) => this.profile.set(data),
      error: (err) => console.error('Failed to load profile', err)
    });
  }
}
