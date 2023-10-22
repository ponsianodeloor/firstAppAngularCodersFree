import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenInputComponent } from './children-input.component';

describe('ChildrenInputComponent', () => {
  let component: ChildrenInputComponent;
  let fixture: ComponentFixture<ChildrenInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenInputComponent]
    });
    fixture = TestBed.createComponent(ChildrenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
