import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './models/task';
import { Project } from './models/project';
import { User } from './models/user';
import { Http, Headers, Response } from "@angular/http";
import { HttpParams } from '@angular/common/http';
 
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
    
    addTask(task:Task, userId:number):Observable<string>{
        return this._http.post<string>(endpointTask, task, {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })  ,
          params : new HttpParams({fromString: 'userId=' + userId})
        })
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

    getProjectBasedTaskDetails():Observable<any> {
      return this._http.get<any>(endpointProject + '/taskDetails')
    };
    
    getProjectById(projId:number):Observable<any> {
      return this._http.get<any>(endpointProject + '?projectId=' + projId);
    };

    getProjectByName(projName:string):Observable<any>{
      return this._http.get<any>(endpointProject + '?projectName=' + projName)
    };

    addProject(proj:Project):Observable<string>{
      return this._http.post<string>(endpointProject, proj, httpOptions)
    };

    editProject(proj:Project):Observable<string>{
      return this._http.put<string>(endpointProject, proj, httpOptions)
    }
    
    deleteProject(project_Id:number):Observable<string>{
      return this._http.delete<string>(endpointProject + '?projectId=' + project_Id)
    }

    //Users
    getUserById(usrId:number):Observable<any> {
      return this._http.get<any>(endpointUser + '?userId=' + usrId);
    };

    getUserByName(usrName:string):Observable<any>{
      return this._http.get<any>(endpointUser + '?userName=' + usrName)
    };    

    addUser(user:User):Observable<string>{
      return this._http.post<string>(endpointUser, user, httpOptions)
    };

    editUser(user:User):Observable<string>{
      return this._http.put<string>(endpointUser, user, httpOptions)
    }

    getAllUsers(): Observable<any> {
      return this._http.get<any>(endpointUser)
    }; 
    
    deleteUser(user_Id:number):Observable<string>{
        return this._http.delete<string>(endpointUser + '?userId=' + user_Id)
    }
  }

    