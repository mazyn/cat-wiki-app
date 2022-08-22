import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <dialog
      class="backdrop:bg-gray-800 backdrop:opacity-70"
      #dialog
      (click)="handleClick($event)"
      (cancel)="handleCancelEvent($event)"
    >
      <ng-content></ng-content>
    </dialog>
  `,
})
export class DialogComponent implements OnInit, OnChanges {
  @Input() show: boolean = false;
  @Output() onBackdropClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('dialog', { static: true })
  private dialogEl: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.show = changes['show'].currentValue;
    const prevShowVal = changes['show'].previousValue ?? false;

    if (this.show != prevShowVal) this.toggleDialog();
  }

  private toggleDialog(): void {
    if (this.show) {
      this.dialogEl?.nativeElement.showModal();
      return;
    }

    this.dialogEl?.nativeElement.close();
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

  handleCancelEvent(event: Event) {
    event.preventDefault();
    this.onCancel.emit();
  }
}
