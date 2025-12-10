import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about';
import { CertificatesComponent } from './features/certificates/certificates';
import { ContactComponent } from './features/contact/contact';
import { ExperienceComponent } from './features/experience/experience';
import { HomeComponent } from './features/home/home';
import { ProjectsComponent } from './features/projects/projects';
import { SkillsComponent } from './features/skills/skills';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: '**', redirectTo: '' }
];
