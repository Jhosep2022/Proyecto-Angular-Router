import { Routes } from '@angular/router';
import ContactoComponent from './dashboard/pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'contactillo',
        title: 'Contacto',
        loadComponent: () => ContactoComponent,
      },
      {
        path: 'perfil',
        title: 'Perfil',
        loadComponent: () => import('./dashboard/pages/perfil/perfil.component'),
      },
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./dashboard/pages/home/home.component'),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
