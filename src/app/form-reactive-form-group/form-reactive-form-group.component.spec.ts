import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveFormGroupComponent } from './form-reactive-form-group.component';

describe('FormReactiveFormGroupComponent', () => {
  let component: FormReactiveFormGroupComponent;
  let fixture: ComponentFixture<FormReactiveFormGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReactiveFormGroupComponent]
    });
    fixture = TestBed.createComponent(FormReactiveFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
