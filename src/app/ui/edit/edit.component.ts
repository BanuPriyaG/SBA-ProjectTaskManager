import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Task } from 'src/app/models/task';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  task = new Task();
  constructor(private _service:SharedService, 
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder) { }
    editForm: FormGroup; 
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
        this.task = result});});
  }

  Edit(){
    this._service.editTask(this.task).subscribe(
      result => console.log(result),
      error => console.error(error)
  );
    this._router.navigate(['ViewTask'])}
}
