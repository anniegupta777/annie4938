import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewonboardingFormComponent } from './viewonboarding-form.component';

describe('ViewonboardingFormComponent', () => {
  let component: ViewonboardingFormComponent;
  let fixture: ComponentFixture<ViewonboardingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewonboardingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewonboardingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
