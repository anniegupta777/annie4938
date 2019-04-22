import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditonboardingFormComponent } from './editonboarding-form.component';

describe('EditonboardingFormComponent', () => {
  let component: EditonboardingFormComponent;
  let fixture: ComponentFixture<EditonboardingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditonboardingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditonboardingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
