import { Component, OnInit } from '@angular/core';
import Splitting from 'splitting';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Splitting();
  }
}
