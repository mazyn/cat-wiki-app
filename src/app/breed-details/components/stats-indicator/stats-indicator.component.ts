import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-indicator',
  template: `
    <span class="font-bold inline-block mb-1">{{ statusName }}:</span>
    <span class="grid grid-cols-5 gap-x-2">
      <span
        *ngFor="let i of getTotalLevels()"
        class="inline-block h-2 rounded-full"
        [ngClass]="currentLevel > i ? 'bg-indicator' : 'bg-indicatorGray'"
      ></span>
    </span>
  `,
  styles: [],
})
export class StatsIndicatorComponent implements OnInit {
  @Input('statusName') statusName: string = '';
  @Input('acessor') totalLevels: number = 5;
  @Input('currentLevel') currentLevel: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getTotalLevels(): number[] {
    return Array(this.totalLevels)
      .fill(0)
      .map((_, i) => i);
  }
}
