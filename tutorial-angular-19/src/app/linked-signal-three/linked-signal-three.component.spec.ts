import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedSignalThreeComponent } from './linked-signal-three.component';

describe('LinkedSignalThreeComponent', () => {
  let component: LinkedSignalThreeComponent;
  let fixture: ComponentFixture<LinkedSignalThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedSignalThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedSignalThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
