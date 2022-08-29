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
})
export class TitleComponent implements OnInit {
  @Input('size') size: TailwindSize = '';
  @Input('leading') leading: TailwindLeadingSize = '';
  @Input('renderDash') renderDash: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getCustomClasses(): string {
    return [getTextSizeClass(this.size), getLeadingSizeClass(this.leading)]
      .filter((c) => !!c)
      .join(' ');
  }
}
