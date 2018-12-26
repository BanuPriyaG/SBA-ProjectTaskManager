import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addTask',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.css']
})

export class AddTaskComponent implements OnInit {
  task = new Task();
  project:string;
  projectsList:Project[]=[];
  parentTask:string;
  tasksList:Task[]=[];
  userName:string;
  usersList:User[]=[];

  constructor(
    private _service:SharedService,
    private _route: ActivatedRoute,
    private _router: Router) {     
  }
  ngOnInit() {
  }

  Add(){
    this.task.status = "InProgress";
    this._service.addTask(this.task).subscribe(
        result => console.log(result),
        error => console.error(error)
    )
    this._router.navigate(['ViewTask']);
  }

  GetProjects(){
    this._service.getProjectByName(this.project).subscribe(
      data => this.projectsList = data,
      error => console.error(error)
    )
  }

  SelectProject(project_Id){
    this.task.project_ID = project_Id;
    this._service.getProjectById(project_Id).subscribe(
      data => {
        document.getElementById('pmodalClose').click();
        this.task.project_ID = project_Id;
        this.project =data.project1;
      },
      error => console.error(error)
    )
  }

  GetTasks(){
    this._service.getTaskByName(this.parentTask).subscribe(
      data => this.tasksList = data,
      error => console.error(error)
    )
  }

  SelectTask(task_Id){
    this.task.parentTask = this.parentTask;
    this._service.getTask(task_Id).subscribe(
      data => {
        document.getElementById('tmodalClose').click();
        this.parentTask =data.task;
      },
      error => console.error(error)
    )
  }

  GetUsers(){
    this._service.getUserByName(this.userName).subscribe(
      data => this.usersList = data,
      error => console.error(error)
    )
  }

  SelectUser(user_Id){
    this._service.getUserById(user_Id).subscribe(
      data => {
        document.getElementById('umodalClose').click();
        this.userName =data.firstName + ' ' + data.lastName;
      },
      error => console.error(error)
    )
  }
}