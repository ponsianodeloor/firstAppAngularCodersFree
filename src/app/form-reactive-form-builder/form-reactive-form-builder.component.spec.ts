import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveFormBuilderComponent } from './form-reactive-form-builder.component';

describe('FormReactiveFormBuilderComponent', () => {
  let component: FormReactiveFormBuilderComponent;
  let fixture: ComponentFixture<FormReactiveFormBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReactiveFormBuilderComponent]
    });
    fixture = TestBed.createComponent(FormReactiveFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
