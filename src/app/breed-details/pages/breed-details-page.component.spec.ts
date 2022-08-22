import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedDetailsPageComponent } from './breed-details-page.component';

describe('BreedDetailsComponent', () => {
  let component: BreedDetailsPageComponent;
  let fixture: ComponentFixture<BreedDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedDetailsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreedDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
