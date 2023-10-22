import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherOutputComponent } from './father-output.component';

describe('FatherOutputComponent', () => {
  let component: FatherOutputComponent;
  let fixture: ComponentFixture<FatherOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherOutputComponent]
    });
    fixture = TestBed.createComponent(FatherOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
