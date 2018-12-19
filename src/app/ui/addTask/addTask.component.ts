import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Task } from 'src/app/models/task';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 

@Component({
  selector: 'app-add',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.css']
})

export class AddTaskComponent implements OnInit {
  task = new Task();
  constructor(private _service:SharedService,
    private _route: ActivatedRoute,
      private _router: Router,
      private _formBuilder: FormBuilder) {     
  }
  addForm: FormGroup; 
  ngOnInit() {
    this.addForm = this._formBuilder.group({        
      task: ['', Validators.required],  
      parentTask: ['', [Validators.required]],  
      priority: ['', [Validators.required]],
      start_Date:['', [Validators.required]],
      end_Date:['', [Validators.required]]
    }); 
  }

  Add(){
    this._service.addTask(this.task).subscribe(
        result => console.log(result),
        error => console.error(error)
    )
    this._router.navigate(['ViewTask']);
  }
}
