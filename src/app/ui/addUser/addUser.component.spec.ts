import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './addUser.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form', () => {
    expect(component.addUserForm).toBeTruthy();
  });

  it('should add user', () => {
    expect(component.AddUser).toBeTruthy();
  });

  it('should delete user', () => {
    expect(component.Delete).toBeTruthy();
  });

  it('should edit user', () => {
    expect(component.Edit).toBeTruthy();
  });

  it('should reset form', () => {
    expect(component.Reset).toBeTruthy();
  });
});
