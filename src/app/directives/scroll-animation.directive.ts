import { Directive, ElementRef, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Always add reveal class
    if (!this.el.nativeElement.classList.contains('terminal-window') &&
        !this.el.nativeElement.classList.contains('terminal-body')) {
      this.renderer.addClass(this.el.nativeElement, 'reveal');
    }
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'active');
          console.log('ScrollAnimation: Activated', this.el.nativeElement.className);
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'active');
        }
      },
      { threshold: 0.10 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}