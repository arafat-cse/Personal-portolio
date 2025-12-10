import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private mockCertificates: Certificate[] = [
    {
      id: 1,
      title: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'Aug 2023',
      credentialUrl: 'https://learn.microsoft.com',
      imageUrl: 'https://placehold.co/100x100/blue/white?text=Azure'
    },
    {
      id: 2,
      title: 'Google Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: 'May 2022',
      credentialUrl: 'https://cloud.google.com',
      imageUrl: 'https://placehold.co/100x100/red/white?text=GCP'
    },
    {
      id: 3,
      title: 'Angular Certified Developer',
      issuer: 'Angular Training',
      date: 'Jan 2021',
      credentialUrl: 'https://angular.io',
      imageUrl: 'https://placehold.co/100x100/red/white?text=Angular'
    }
  ];

  constructor() { }

  getCertificates(): Observable<Certificate[]> {
    return of(this.mockCertificates);
  }
}
