import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageMostSearchedComponent } from './landing-page-most-searched.component';

describe('LandingPageMostSearchedComponent', () => {
  let component: LandingPageMostSearchedComponent;
  let fixture: ComponentFixture<LandingPageMostSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageMostSearchedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageMostSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
