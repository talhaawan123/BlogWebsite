import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewBlogsComponent } from './user-view-blogs.component';

describe('UserViewBlogsComponent', () => {
  let component: UserViewBlogsComponent;
  let fixture: ComponentFixture<UserViewBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
