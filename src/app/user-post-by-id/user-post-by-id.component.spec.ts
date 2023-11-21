import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostByIdComponent } from './user-post-by-id.component';

describe('UserPostByIdComponent', () => {
  let component: UserPostByIdComponent;
  let fixture: ComponentFixture<UserPostByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
