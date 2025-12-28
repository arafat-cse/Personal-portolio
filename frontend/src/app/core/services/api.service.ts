import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:7085/api'; // Backend API URL

  constructor(private http: HttpClient) { }

  /**
   * Get authorization headers with JWT token
   */
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  /**
   * GET request
   * @param endpoint - API endpoint (e.g., 'hero', 'auth/login')
   */
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders()
    });
  }

  /**
   * GET request by ID
   * @param endpoint - API endpoint
   * @param id - Resource ID
   */
  getById<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`, {
      headers: this.getHeaders()
    });
  }

  /**
   * POST request
   * @param endpoint - API endpoint
   * @param data - Request body
   */
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data, {
      headers: this.getHeaders()
    });
  }

  /**
   * PUT request (full update)
   * @param endpoint - API endpoint
   * @param id - Resource ID
   * @param data - Request body
   */
  put<T>(endpoint: string, id: number | string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  /**
   * PATCH request (partial update)
   * @param endpoint - API endpoint
   * @param id - Resource ID
   * @param data - Request body
   */
  patch<T>(endpoint: string, id: number | string, data: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${endpoint}/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  /**
   * DELETE request
   * @param endpoint - API endpoint
   * @param id - Resource ID
   */
  delete<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}/${id}`, {
      headers: this.getHeaders()
    });
  }
}
