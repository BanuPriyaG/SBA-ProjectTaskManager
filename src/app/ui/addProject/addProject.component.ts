import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { SharedService } from 'src/app/shared.service';
import { Project } from 'src/app/models/project';
import { ProjTasks } from 'src/app/models/projTask';
import { User } from 'src/app/models/user';
import { FilterProjectPipe } from '../../pipe/filterProject.pipe';

@Component({
  selector: 'app-addProject',
  templateUrl: './addProject.component.html',
  styleUrls: ['./addProject.component.css']
})
export class AddProjectComponent implements OnInit {
  addProjectForm: FormGroup; 
  project = new Project();
  projectTaskDetails:ProjTasks[]=[];
  usersList:User[]=[];
  manager:string;
  searchProject:string;
  sortingName: string;
  isDesc: boolean;
  today = new Date();

  constructor(
    private _service:SharedService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.project.start_Date = this.today;
    this.project.end_Date= new Date(this.today.getDate() + 1);
    
    this.addProjectForm = this._formBuilder.group({      
      project: ['', Validators.required],    
      priority: ['', [Validators.required]],
      start_Date:['', [Validators.required]],
      end_Date:['', [Validators.required]],    
      manager: ['', Validators.required],  
    }); 

    this._service.getProjectBasedTaskDetails().subscribe(
      data => this.projectTaskDetails = data,
      error => console.error(error)
    )
  }

  AddProject()
  {
    if(document.getElementById("btnSubmit").innerText == "Add")
    {
      this._service.addProject(this.project).subscribe(
          result => console.log(result),
          error => console.error(error)
      )            
    }
    else if(document.getElementById("btnSubmit").innerText == "Update")
    {
      this._service.editProject(this.project).subscribe(
        result => console.log(result),
        error => console.error(error)
      ) 
      document.getElementById("btnSubmit").innerText = "Add";
    }
    window.location.reload();
  }

  GetUsers(){
    this._service.getAllUsers().subscribe(
      data => this.usersList = data,
      error => console.error(error)
    )
  }

  SelectUser(user_Id){
    this._service.getUserById(user_Id).subscribe(
      data => {
        document.getElementById('umodalClose').click();
        this.manager =data.firstName + ' ' + data.lastName;
      },
      error => console.error(error)
    )
  }

  Edit(projectID)  {
    this._service.getProjectById(projectID).subscribe(
      data =>{ 
        this.project = data;
        document.getElementById("btnSubmit").innerText = "Update";
      },
      error => console.error(error)
    )
  }

  Delete(projectID)  {
    this._service.deleteProject(projectID).subscribe(
      result => console.log(result),
      error => console.error(error)
    )
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

  Reset()
  {
    this.manager = '';
    this.project.project1='';
    this.project.priority =null;
    this.project.start_Date =null;
    this.project.end_Date =null;
  }
}
