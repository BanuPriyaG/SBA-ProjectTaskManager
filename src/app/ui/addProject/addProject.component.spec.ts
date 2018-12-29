import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectComponent } from './addProject.component';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add project', () => {
    expect(component.AddProject()).toBeTruthy();
  });

  it('should suspend project', () => {
    expect(component.Delete(1)).toBeTruthy();
  });

  it('should update project', () => {
    expect(component.Edit(1)).toBeTruthy();
  });

  it('should get all users', () => {
    expect(component.GetUsers()).toBeTruthy();
  });

  it('should reset form', () => {
    expect(component.Reset()).toBeTruthy();
  });

  it('should validate project form', () => {
    expect(component.addProjectForm).toBeTruthy();
  });

  it('should select user from modal box', () => {
    expect(component.SelectUser(1)).toBeTruthy();
  });
});
