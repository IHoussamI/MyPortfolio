import { Directive, ElementRef, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'reveal');
    
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'active');
          setTimeout(() => {
            this.renderer.removeClass(this.el.nativeElement, 'reveal');
          }, 1000);
          this.observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );
  
    setTimeout(() => {
      this.observer.observe(this.el.nativeElement);
    }, 100);
  }
  

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
} 