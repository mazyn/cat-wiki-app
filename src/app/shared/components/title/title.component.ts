import { Component, Input, OnInit } from '@angular/core';
import {
  getLeadingSizeClass,
  getTextSizeClass,
  TailwindLeadingSize,
  TailwindSize,
} from '../../utils/tailwind';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input('size') size: TailwindSize = '';
  @Input('leading') leading: TailwindLeadingSize = '';

  constructor() {}

  ngOnInit(): void {}

  getCustomClasses(): string {
    return [getTextSizeClass(this.size), getLeadingSizeClass(this.leading)]
      .filter((c) => !!c)
      .join(' ');
  }
}
