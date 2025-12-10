import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(message: ContactMessage): Observable<any> {
    // In a real app: return this.http.post(`${environment.api}/contact`, message);
    console.log('Sending message:', message);
    return of({ success: true, message: 'Message sent successfully!' });
  }
}
