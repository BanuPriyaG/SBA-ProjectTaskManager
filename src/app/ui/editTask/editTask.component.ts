import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Task } from 'src/app/models/task';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-editTask',
  templateUrl: './editTask.component.html',
  styleUrls: ['./editTask.component.css']
})
export class EditTaskComponent implements OnInit {
  task = new Task();
  constructor(private _service:SharedService, 
    private _router: Router,
    private _route: ActivatedRoute) { }
    
  ngOnInit() {

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
