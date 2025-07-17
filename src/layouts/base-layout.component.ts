import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../app/components/header/header.component';
import { FooterComponent } from '../app/components/footer/footer.component';

@Component({
  selector: 'app-base-layout',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent]
})
export class BaseLayoutComponent {}
