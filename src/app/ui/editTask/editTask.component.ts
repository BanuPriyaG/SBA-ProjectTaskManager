import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Task } from 'src/app/models/task';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editTask',
  templateUrl: './editTask.component.html',
  styleUrls: ['./editTask.component.css']
})
export class EditTaskComponent implements OnInit {
  task = new Task();
  editForm: FormGroup; 
  constructor(private _service:SharedService, 
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder){}
    //public datepipe: DatePipe) { }
    
  ngOnInit() {
    this.editForm = this._formBuilder.group({        
      task: ['', Validators.required],  
      parentTask: ['', [Validators.required]],  
      priority: ['', [Validators.required]],
      start_Date:['', [Validators.required]],
      end_Date:['', [Validators.required]]
    }); 

    this._route.params.subscribe(params => {
      this._service.getTask(params['id']).subscribe(result => {
        this.task = result;
      });});
  }

  Edit(){
    //console.log(this.task);
    this._service.editTask(this.task).subscribe(
      result => console.log(result),
      error => console.error(error)
  )
  window.location.reload();
}
}
