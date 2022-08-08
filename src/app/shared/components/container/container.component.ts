import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: ` <main class="container mx-auto px-4">
    <ng-content></ng-content>
  </main>`,
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
