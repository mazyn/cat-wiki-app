import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <dialog
      class="backdrop:bg-gray-800 backdrop:opacity-70 bg-transparent w-full relative z-0 p-0"
      #dialog
      (click)="handleClick($event)"
      (cancel)="handleCancelEvent($event)"
    >
      <section
        class="rounded-xl bg-white h-full p-4 mx-auto"
        [ngClass]="customClasses"
      >
        <div class="w-full flex justify-end mb-6">
          <a
            type="button"
            class="inline-flex bg-gray-100 hover:bg-gray-300 focus:bg-gray-200 focus:outline-1 focus:outline-gray-700 rounded-lg p-2"
            (click)="toggle()"
            autofocus="false"
          >
            <span class="inline-block material-icons">close</span>
          </a>
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

  private show: boolean = false;

  constructor() {}

  ngOnDestroy(): void {
    this.unlockScroll();
  }

  get isOpen(): boolean {
    return this.show === true;
  }

  toggle(): void {
    this.show = !this.show;
    this.toggleDialogElement();
  }

  private toggleDialogElement(): void {
    if (this.show) {
      this.dialogEl?.nativeElement.showModal();
      this.lockScroll();
      return;
    }

    this.unlockScroll();
    this.dialogEl?.nativeElement.close();
  }

  private lockScroll(): void {
    const body = document.querySelector('body');
    if (!body) return;
    body.style.overflowY = 'hidden';
  }

  private unlockScroll(): void {
    const body = document.querySelector('body');
    if (!body) return;
    body.style.overflowY = 'auto';
  }

  handleClick(event: MouseEvent): void {
    if (event.target === this.dialogEl?.nativeElement) this.toggle();
  }

  handleCancelEvent(event: Event): void {
    event.preventDefault();
    this.toggle();
  }
}
