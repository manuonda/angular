import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpresourceAdvancedComponent } from './httpresource-advanced.component';

describe('HttpresourceAdvancedComponent', () => {
  let component: HttpresourceAdvancedComponent;
  let fixture: ComponentFixture<HttpresourceAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpresourceAdvancedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpresourceAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
