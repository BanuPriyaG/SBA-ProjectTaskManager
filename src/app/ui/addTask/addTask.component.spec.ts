import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './addTask.component';

describe('AddComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check add method', () => {
    expect(component.Add()).toBeTruthy();
  });
  
  it('should get projects', () => {
    expect(component.GetProjects()).toBeTruthy();
  });

  it('should get tasks', () => {
    expect(component.GetTasks()).toBeTruthy();
  });

  it('check get users', () => {
    expect(component.GetUsers()).toBeTruthy();
  });

  it('should select a project', () => {
    expect(component.SelectProject(1)).toBeTruthy();
  });

  it('should select a task', () => {
    expect(component.SelectTask(1)).toBeTruthy();
  });

  it('should select a user', () => {
    expect(component.SelectUser(1)).toBeTruthy();
  });
});
