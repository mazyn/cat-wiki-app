import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breed-details-stats-indicator',
  template: `
    <div class="md:flex md:items-center">
      <span class="font-bold inline-block mb-1 md:mb-0 md:flex-[2] xl:flex-[3]"
        >{{ statusName }}:</span
      >
      <span class="grid grid-cols-5 gap-x-2 md:flex-[3] xl:flex-[5]">
        <span
          *ngFor="let i of getTotalLevels()"
          class="inline-block h-2 sm:h-[10px] 2xl:h-3 rounded-full"
          [ngClass]="currentLevel > i ? 'bg-indicator' : 'bg-indicatorGray'"
        ></span>
      </span>
    </div>
  `,
  styles: [],
})
export class BreedDetailsStatsIndicatorComponent implements OnInit {
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
