import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsIndicatorComponent } from './stats-indicator.component';

describe('StatsIndicatorComponent', () => {
  let component: StatsIndicatorComponent;
  let fixture: ComponentFixture<StatsIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
