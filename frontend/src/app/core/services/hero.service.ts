import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface HeroSection {
  id: number;
  greeting: string;
  name: string;
  title: string;
  description: string;
}

export interface CreateHeroSection {
  greeting: string;
  name: string;
  title: string;
  description: string;
}

export interface UpdateHeroSection {
  greeting: string;
  name: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private endpoint = 'hero';

  constructor(private apiService: ApiService) { }

  /**
   * Get all hero sections
   */
  getAll(): Observable<HeroSection[]> {
    return this.apiService.get<HeroSection[]>(this.endpoint);
  }

  /**
   * Get hero section by ID
   */
  getById(id: number): Observable<HeroSection> {
    return this.apiService.getById<HeroSection>(this.endpoint, id);
  }

  /**
   * Create new hero section
   */
  create(data: CreateHeroSection): Observable<HeroSection> {
    return this.apiService.post<HeroSection>(this.endpoint, data);
  }

  /**
   * Update hero section (full update)
   */
  update(id: number, data: UpdateHeroSection): Observable<HeroSection> {
    return this.apiService.put<HeroSection>(this.endpoint, id, data);
  }

  /**
   * Patch hero section (partial update)
   */
  patch(id: number, data: Partial<UpdateHeroSection>): Observable<HeroSection> {
    return this.apiService.patch<HeroSection>(this.endpoint, id, data);
  }

  /**
   * Delete hero section
   */
  delete(id: number): Observable<any> {
    return this.apiService.delete(this.endpoint, id);
  }
}
