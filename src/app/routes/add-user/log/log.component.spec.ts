import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserLogComponent } from './log.component';

describe('AddUserLogComponent', () => {
  let component: AddUserLogComponent;
  let fixture: ComponentFixture<AddUserLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserLogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
