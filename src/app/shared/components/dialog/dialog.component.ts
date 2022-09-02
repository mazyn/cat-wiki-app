import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <dialog
      class="backdrop:bg-gray-800 backdrop:opacity-70 bg-transparent w-full z-0 p-0"
      [ngClass]="{
        'max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-96 md:h-[512px] lg:h-[672px] xl:h-[736px]':
          imageMode && isOpen
      }"
      #dialog
      (click)="handleClick($event)"
      (cancel)="handleCancelEvent($event)"
    >
      <section
        class="rounded-xl bg-white h-full p-4 mx-auto"
        [ngClass]="wrapperClasses"
      >
        <div class="flex justify-end pointer-events-none mb-6">
          <button
            type="button"
            class="inline-flex pointer-events-auto bg-gray-100 hover:bg-gray-300 focus:outline-none rounded-lg p-2"
            (click)="toggle()"
            autofocus="false"
          >
            <span class="inline-block material-icons">close</span>
          </button>
        </div>
        <ng-content></ng-content>
      </section>
    </dialog>
  `,
})
export class DialogComponent implements OnDestroy {
  @ViewChild('dialog', { static: true })
  private dialogEl: ElementRef | undefined;

  @Input()
  customClasses: string | string[] = '';

  @Input()
  imageMode: boolean = false;

  private show: boolean = false;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platform: any,
  ) {}

  get isOpen(): boolean {
    return this.show === true;
  }

  toggle(): void {
    this.show = !this.show;
    this.toggleDialogElement();
  }

  private toggleDialogElement(): void {
    if (this.show) {
      this.lockScroll();
      this.dialogEl?.nativeElement.showModal();
      return;
    }

    this.dialogEl?.nativeElement.close();
    this.unlockScroll();
  }

  private lockScroll(): void {
    if (!isPlatformBrowser(this.platform)) return;
    const offsetY = window.scrollY;
    this.document.body.style.top = `${-offsetY}px`;
    this.document.body.classList.add('js-lock-position');
  }

  private unlockScroll(): void {
    if (!isPlatformBrowser(this.platform)) return;
    const offsetY = Math.abs(parseInt(this.document.body.style.top || '0', 10));
    this.document.body.classList.remove('js-lock-position');
    this.document.body.style.removeProperty('top');
    window.scrollTo(0, offsetY || 0);
  }

  ngOnDestroy(): void {
    this.unlockScroll();
  }

  handleClick(event: MouseEvent): void {
    if (event.target === this.dialogEl?.nativeElement) this.toggle();
  }

  handleCancelEvent(event: Event): void {
    event.preventDefault();
    this.toggle();
  }

  get wrapperClasses(): string {
    let classes = '';

    if (this.imageMode)
      classes += 'bg-transparent flex flex-col pointer-events-none';

    if (!this.customClasses) return classes;

    if (Array.isArray(this.customClasses)) {
      classes += this.customClasses.join(' ');
      return classes;
    }

    classes += this.customClasses;
    return classes;
  }
}
