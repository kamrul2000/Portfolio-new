import { Routes } from '@angular/router';

/**
 * Single-page portfolio: every section is rendered inside the root component
 * and navigation happens through anchor links + IntersectionObserver scroll-spy.
 *
 * The router is wired up so the app remains extensible if a multi-page section
 * (e.g. blog, case studies) is added later.
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home.page').then(m => m.HomePage) },
  { path: '**', redirectTo: '' },
];
