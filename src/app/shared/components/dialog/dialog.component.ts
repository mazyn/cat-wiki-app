import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
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
        <ng-content></ng-content>
      </section>
    </dialog>
  `,
})
export class DialogComponent implements OnChanges, OnDestroy {
  @Input() customClasses: string | string[] = '';
  @Input() show: boolean = false;
  @Output() onBackdropClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('dialog', { static: true })
  private dialogEl: ElementRef | undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.show = changes['show'].currentValue;
    const prevShowVal = changes['show'].previousValue ?? false;

    if (this.show != prevShowVal) this.toggleDialog();
  }

  private toggleDialog(): void {
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

  ngOnDestroy(): void {
    this.unlockScroll();
  }

  handleClick(event: MouseEvent): void {
    if (this.didClickOnBackdrop(event)) this.onBackdropClick.emit();
  }

  private didClickOnBackdrop(event: MouseEvent): boolean {
    const dialog = this.dialogEl?.nativeElement;

    if (!dialog) return true;

    const rect = dialog.getBoundingClientRect() as DOMRect;

    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    return !isInDialog;
  }

  handleCancelEvent(event: Event): void {
    event.preventDefault();
    this.onCancel.emit();
  }
}
