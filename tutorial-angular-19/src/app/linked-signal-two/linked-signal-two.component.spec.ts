import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedSignalTwoComponent } from './linked-signal-two.component';

describe('LinkedSignalTwoComponent', () => {
  let component: LinkedSignalTwoComponent;
  let fixture: ComponentFixture<LinkedSignalTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedSignalTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedSignalTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
