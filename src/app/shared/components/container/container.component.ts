import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: ` <div class="flex flex-col justify-between h-full overflow-y-auto">
    <main class="container mx-auto px-4">
      <ng-content></ng-content>
    </main>
    <app-footer></app-footer>
  </div>`,
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
