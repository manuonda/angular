import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshRxresourceComponent } from './refresh-rxresource.component';

describe('RefreshRxresourceComponent', () => {
  let component: RefreshRxresourceComponent;
  let fixture: ComponentFixture<RefreshRxresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefreshRxresourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshRxresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
