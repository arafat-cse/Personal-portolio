import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { AboutComponent } from './features/about/about';
import { AboutAdminComponent } from './features/admin/about-admin/about-admin';
import { AdminLayoutComponent } from './features/admin/admin-layout/admin-layout';
import { BlogAdminComponent } from './features/admin/blog-admin/blog-admin';
import { DashboardComponent } from './features/admin/dashboard/dashboard';
import { HeroAdminComponent } from './features/admin/hero-admin/hero-admin';
import { LoginComponent } from './features/admin/login/login';
import { PortfolioAdminComponent } from './features/admin/portfolio-admin/portfolio-admin';
import { CertificatesComponent } from './features/certificates/certificates';
import { ContactComponent } from './features/contact/contact';
import { ExperienceComponent } from './features/experience/experience';
import { HomeComponent } from './features/home/home';
import { MainLayoutComponent } from './features/main-layout/main-layout';
import { ProjectsComponent } from './features/projects/projects';
import { SkillsComponent } from './features/skills/skills';

export const routes: Routes = [
  // Public Routes wrapped in MainLayout
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'certificates', component: CertificatesComponent },
    ]
  },
  
  // Admin Login (Standalone)
  { path: 'admin/login', component: LoginComponent },

  // Admin Routes wrapped in AdminLayout
  { 
    path: 'admin', 
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'hero', component: HeroAdminComponent },
      { path: 'about', component: AboutAdminComponent },
      { path: 'portfolio', component: PortfolioAdminComponent },
      { path: 'blog', component: BlogAdminComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: '' }
];
