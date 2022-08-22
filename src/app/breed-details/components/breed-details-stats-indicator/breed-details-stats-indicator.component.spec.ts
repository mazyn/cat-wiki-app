import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedDetailsStatsIndicatorComponent } from './breed-details-stats-indicator.component';

describe('StatsIndicatorComponent', () => {
  let component: BreedDetailsStatsIndicatorComponent;
  let fixture: ComponentFixture<BreedDetailsStatsIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedDetailsStatsIndicatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreedDetailsStatsIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
