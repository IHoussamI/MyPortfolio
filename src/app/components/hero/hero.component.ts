import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-hero',
  imports: [CommonModule,TranslateModule,ScrollAnimationDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'Houssam Mesk';
  age = 23;
  title = 'TITLE';
  status = 'STATUS';
  education = 'EDUCATION_TEXT';



  ngAfterViewInit() {
    this.animateBio();

  }

  downloadCV() {
    const cvUrl = '/document/CV de Houssam Mesk.pdf';
    window.open(cvUrl, '_blank');
  }

  animateBio() {
    const lines = document.querySelectorAll('.typing-animation .line');
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add('animate');
      }, index * 1000 + 500);
    });
  }

  projects = [
    {
      title: 'LineSat',
      images: [
        { src: '/LineSat/checkout.webp', alt: 'Checkout Page' },
        { src: '/BingeBear/dashboard.webp', alt: 'Admin dashboard' }
      ]
    },
    {
      title: 'MacMarket',
      images: [
        { src: '/macMarket/about-us.webp', alt: 'about us page' },     
        { src: '/macMarket/contact-us.webp', alt: 'Contact us page' },
        { src: '/macMarket/cart.webp', alt: 'cart page' },
        { src: '/macMarket/admin-panel.webp', alt: 'admin panel page' },
        { src: '/macMarket/Product-management.webp', alt: 'product management page' }

      ]
    },
    {
      title: 'BingeBear',
      images: [
        { src: '/BingeBear/checkout.webp', alt: 'checkout page' },
        { src: '/BingeBear/dashboard.webp', alt: 'Admin dashboard' }
      ]
    }
  ];

  galleryActive = false;
  activeProjectIndex = 0;
  currentImageIndex = 0;
  activeImage = this.projects[0].images[0];

  openGallery(index: number) {
    this.activeProjectIndex = index;
    this.currentImageIndex = 0;
    this.activeImage = this.projects[index].images[0];
    this.galleryActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeGallery() {
    this.galleryActive = false;
    document.body.style.overflow = '';
  }

  nextImage() {
    if (this.projects[this.activeProjectIndex]) {
      this.currentImageIndex = 
        (this.currentImageIndex + 1) % this.projects[this.activeProjectIndex].images.length;
      this.activeImage = this.projects[this.activeProjectIndex].images[this.currentImageIndex];
    }
  }

  prevImage() {
    if (this.projects[this.activeProjectIndex]) {
      this.currentImageIndex = 
        (this.currentImageIndex - 1 + this.projects[this.activeProjectIndex].images.length) % 
        this.projects[this.activeProjectIndex].images.length;
      this.activeImage = this.projects[this.activeProjectIndex].images[this.currentImageIndex];
    }
  }

  // Profile Photo Modal functionality
  profileModalActive = false;

  openProfileModal() {
    this.profileModalActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeProfileModal() {
    this.profileModalActive = false;
    document.body.style.overflow = '';
  }

  // Handle keyboard events for profile modal
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.profileModalActive) {
        this.closeProfileModal();
      } else if (this.galleryActive) {
        this.closeGallery();
      }
    }
  }
}

