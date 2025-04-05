import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSerarchComponent } from './user-serarch.component';

describe('UserSerarchComponent', () => {
  let component: UserSerarchComponent;
  let fixture: ComponentFixture<UserSerarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSerarchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSerarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
