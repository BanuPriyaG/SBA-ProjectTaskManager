import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './models/task';
import { Project } from './models/project';
import { Http, Headers, Response } from "@angular/http";
 
const endpointTask = 'http://localhost/SBA/ProjectManagerService/api/tasks';
const endpointProject = 'http://localhost/SBA/ProjectManagerService/api/projects';
const endpointUser = 'http://localhost/SBA/ProjectManagerService/api/users';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()

export class SharedService {
    
    constructor(private _http: HttpClient) { }

    // Tasks
    getAllTasks(): Observable<any> {
        return this._http.get<any>(endpointTask)
      };

    getTask(id:number):Observable<any>{
        return this._http.get<any>(endpointTask + '?taskId=' + id)
      };

    getTaskByName(taskName:string):Observable<any>{
      return this._http.get<any>(endpointTask + '?taskName=' + taskName)
    };
    
    addTask(task:Task):Observable<string>{
        return this._http.post<string>(endpointTask, task, httpOptions)
    }
    
    editTask(task:Task):Observable<string>{
      return this._http.put<string>(endpointTask, task, httpOptions)
    }

    deleteTask(task_Id:number):Observable<string>{
        return this._http.delete<string>(endpointTask + '?taskId=' + task_Id)
    }

    searchTaskByProjID(projId:number):Observable<any>{
      return this._http.get<any>(endpointTask + '?projId=' + projId)
    };

    // Projects
    getAllProjects():Observable<any> {
      return this._http.get<any>(endpointProject)
    };
    
    getProjectById(projId:number):Observable<any> {
      return this._http.get<any>(endpointProject + '?projectId=' + projId);
    };

    getProjectByName(projName:string):Observable<any>{
      return this._http.get<any>(endpointProject + '?projectName=' + projName)
    };

    //Users
    getUserById(usrId:number):Observable<any> {
      return this._http.get<any>(endpointUser + '?userId=' + usrId);
    };

    getUserByName(usrName:string):Observable<any>{
      return this._http.get<any>(endpointUser + '?userName=' + usrName)
    };
  }

    