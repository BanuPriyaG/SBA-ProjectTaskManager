import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { Project } from '../../models/project';
import { SharedService } from '../../shared.service';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-viewTask',
  templateUrl: './viewTask.component.html',
  styleUrls: ['./viewTask.component.css']
})
export class ViewTaskComponent implements OnInit {
 item:Task[]=[];
 searchByProjectName:string;
 projectsList:Project[]=[];
 sortingName: string;
 isDesc: boolean;

  constructor(private _service:SharedService, 
    private _router: Router,
    private _route: ActivatedRoute) { }
    
  ngOnInit() {  
   this._service.getAllTasks().subscribe(
      data => this.item = data,
      error => console.error(error))   

   this._service.getAllProjects().subscribe(
        data => this.projectsList = data,
        error => console.error(error)
      )
  }

  GetProjects(){
    this._service.getProjectByName(this.searchByProjectName).subscribe(
      data => this.projectsList = data,
      error => console.error(error)
    )
  }

  SearchTasksByProject(project_Id, projectName){
    this.searchByProjectName = projectName;
    this._service.searchTaskByProjID(project_Id).subscribe(
      data => {
        document.getElementById('modalClose').click();
        this.item = data;
      },
      error => console.error(error)
    )
  }

  Delete(task_Id) {    
      this._service.deleteTask(task_Id).subscribe(
        result => console.log(result),
        error => console.error(error)
  );
  window.location.reload();
  }  

  sort(name: string): void {
    if (name && this.sortingName !== name) {
      this.isDesc = false;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.sortingName = name;
  }
}
