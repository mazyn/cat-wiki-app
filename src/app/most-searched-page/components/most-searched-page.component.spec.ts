import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSearchedPageComponent } from './most-searched-page.component';

describe('MostSearchedPageComponent', () => {
  let component: MostSearchedPageComponent;
  let fixture: ComponentFixture<MostSearchedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostSearchedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostSearchedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
