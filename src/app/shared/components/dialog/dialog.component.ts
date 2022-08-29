import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <dialog
      class="backdrop:bg-gray-800 backdrop:opacity-70 bg-transparent w-full relative z-0 p-0"
      [ngClass]="{ 'flex justify-center items-center': imageMode && isOpen }"
      #dialog
      (click)="handleClick($event)"
      (cancel)="handleCancelEvent($event)"
    >
      <section
        class="rounded-xl bg-white h-full p-4 mx-auto"
        [ngClass]="wrapperClasses"
      >
        <div
          class="w-full flex justify-end mb-6"
          [ngClass]="{ hidden: imageMode }"
        >
          <button
            type="button"
            class="inline-flex bg-gray-100 hover:bg-gray-300 focus:bg-gray-200 focus:outline-1 focus:outline-gray-700 rounded-lg p-2"
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
export class DialogComponent {
  @ViewChild('dialog', { static: true })
  private dialogEl: ElementRef | undefined;

  @Input()
  customClasses: string | string[] = '';

  @Input()
  imageMode: boolean = false;

  private show: boolean = false;

  constructor() {}

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
      return;
    }

    this.dialogEl?.nativeElement.close();
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

    if (this.imageMode) classes += 'bg-transparent inline-flex flex-col';

    if (!this.customClasses) return classes;

    if (Array.isArray(this.customClasses)) {
      classes += this.customClasses.join(' ');
      return classes;
    }

    classes += this.customClasses;
    return classes;
  }
}
