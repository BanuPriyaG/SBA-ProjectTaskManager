import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { SharedService } from '../../shared.service';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterTaskPipe }from '../../pipe/filterTask.pipe';
import { observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 item:Task[]=[];
 searchTask:string;
 searchParentTask:string;
 startSearch:Date;
 endSearch:Date;
 searchPriorityFrom:number;
 searchPriorityTo:number;

  constructor(private _service:SharedService, 
    private _router: Router,
    private _route: ActivatedRoute) { }
  ngOnInit() {  
   this._service.getAllTasks().subscribe(
      data => this.item = data,
      error => console.error(error)) 
  }

  Delete(task_Id) {    
      this._service.deleteTask(task_Id).subscribe(
        result => console.log(result),
        error => console.error(error)
  );
  window.location.reload();
  }  
}
