import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './models/task';
import { Http, Headers, Response } from "@angular/http";
 
const endpoint = 'http://localhost/TaskService/api/tasks';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()

export class SharedService {
    
    constructor(private _http: HttpClient) { }

    getAllTasks(): Observable<any> {
        return this._http.get<any>(endpoint)
      };

    getTask(id:number):Observable<any>{
        return this._http.get<any>(endpoint + '?taskId=' + id)
      };
    
    addTask(task:Task):Observable<string>{
        return this._http.post<string>(endpoint, task, httpOptions)
    }
    
    editTask(task:Task):Observable<string>{
      return this._http.put<string>(endpoint, task, httpOptions)
    }

    deleteTask(task_Id:number):Observable<string>{
        return this._http.delete<string>(endpoint + '?taskId=' + task_Id)
    }
  }

    