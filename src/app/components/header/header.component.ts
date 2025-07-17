import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentLang = 'fr';

  navLinks = [
    { fragment: 'home', name: 'home', display: 'HOME' },
    { fragment: 'about', name: 'about', display: 'ABOUT_ME' },
    { fragment: 'education', name: 'education', display: 'EDUCATION' },
    { fragment: 'projects', name: 'projects', display: 'PROJECTS' },
  ];

  constructor(public translate: TranslateService) {}

  scrollToSection(event: Event, fragment: string) {
    event.preventDefault();
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit() {
    this.currentLang = this.translate.currentLang || 'fr';
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('userLang', lang);
  }
}
