import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersUsersListComponent } from './users-list.component';

describe('UsersUsersListComponent', () => {
  let component: UsersUsersListComponent;
  let fixture: ComponentFixture<UsersUsersListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsersUsersListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
