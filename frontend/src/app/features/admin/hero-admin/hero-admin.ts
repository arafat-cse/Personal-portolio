import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-admin',
  imports: [FormsModule],
  templateUrl: './hero-admin.html',
  styleUrl: './hero-admin.css',
})
export class HeroAdminComponent implements OnInit {
  heroData = {
    greeting: "Hi, I'm",
    name: "Md Arafat Rahman",
    title: "Full Stack Developer",
    description: "I build amazing web applications."
  };

  private apiUrl = 'http://localhost:5000/api/profile/hero';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch initial data
    // this.http.get(this.apiUrl).subscribe(data => this.heroData = data as any);
  }

  saveHero() {
    console.log('Saving hero data:', this.heroData);
    // this.http.post(this.apiUrl, this.heroData).subscribe(() => alert('Saved!'));
    alert('Hero section updated (Mock)!');
  }
}
