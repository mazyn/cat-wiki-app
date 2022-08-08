import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: ` <main class="container mx-auto px-4">
    <router-outlet></router-outlet>
  </main>`,
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
