import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewByIdComponent } from './admin-view-by-id.component';

describe('AdminViewByIdComponent', () => {
  let component: AdminViewByIdComponent;
  let fixture: ComponentFixture<AdminViewByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
