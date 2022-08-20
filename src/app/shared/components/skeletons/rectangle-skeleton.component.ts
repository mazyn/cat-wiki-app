import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'skeleton-rect',
  host: {
    class: 'pulse',
  },
  template: ``,
  styles: [
    `
      :host {
        display: block;
        background: rgb(239, 241, 246) no-repeat;
      }
    `,
  ],
})
export class RectangleSkeletonComponent {
  width: string | undefined;
  height: string | undefined;
  className: string | undefined;
  bgColor: string | undefined;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(...this.className.split(' '));
    }

    host.style.setProperty(
      'background',
      `${this.bgColor ?? 'rgb(239, 241, 246)'} no-repeat`,
    );

    if (this.width) {
      host.style.setProperty('--skeleton-rect-width', this.width);
      host.style.setProperty('width', 'var(--skeleton-rect-width)');
    }

    if (this.height) {
      host.style.setProperty('--skeleton-rect-height', this.height);
      host.style.setProperty('height', 'var(--skeleton-rect-height)');
    }
  }
}
