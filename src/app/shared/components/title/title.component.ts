import { Component, Input, OnInit } from '@angular/core';
import { getTextSizeClass, TailwindSize } from '../../utils/tailwind';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input('size') size: TailwindSize = '';

  getSizeClass = () => getTextSizeClass(this.size);

  constructor() {}

  ngOnInit(): void {}
}
