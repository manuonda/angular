import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpresourceComponent } from './httpresource.component';

describe('HttpresourceComponent', () => {
  let component: HttpresourceComponent;
  let fixture: ComponentFixture<HttpresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpresourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
