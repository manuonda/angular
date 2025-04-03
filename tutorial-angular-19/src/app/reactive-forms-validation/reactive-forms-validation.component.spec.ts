import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsValidationComponent } from './reactive-forms-validation.component';

describe('ReactiveFormsValidationComponent', () => {
  let component: ReactiveFormsValidationComponent;
  let fixture: ComponentFixture<ReactiveFormsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
