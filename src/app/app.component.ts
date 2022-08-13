import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-container>
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  </app-container>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cat-wiki-app';
}
