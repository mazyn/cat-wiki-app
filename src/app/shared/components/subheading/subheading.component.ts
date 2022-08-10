import { Component, Input, OnInit } from '@angular/core';
import { TailwindSize, getTextSizeClass } from '../../utils/tailwind';

@Component({
  selector: 'app-subheading',
  templateUrl: './subheading.component.html',
  styleUrls: ['./subheading.component.scss'],
})
export class SubheadingComponent implements OnInit {
  @Input('size') size: TailwindSize = '';

  getSizeClass = () => getTextSizeClass(this.size);

  constructor() {}

  ngOnInit(): void {}
}
