import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeLayoutComponent } from '../layouts/home-layout.component';
import { BaseLayoutComponent } from '../layouts/base-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // 👈 this is key
      { path: 'home', component: HomeLayoutComponent }
    ]
  }
];
