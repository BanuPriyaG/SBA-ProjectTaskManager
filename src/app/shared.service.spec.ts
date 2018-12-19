import {SharedService} from './shared.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';
import {Task} from './models/task';
import { Http, Headers, Response } from "@angular/http";

// Straight Jasmine testing without Angular's testing support
fdescribe('SharedService', () => {
    let service: SharedService;
    let httpClient:HttpClient;
    let handler:HttpHandler;
    beforeEach(() => {         
        httpClient = new HttpClient(handler);
        service = new SharedService(httpClient); 
    });
   
    it('should add task', () => {
        let task : Task;
      expect(service.addTask(task)).toBeTruthy();
    });
   
    it('should get all tasks', () => {        
      expect(service.getAllTasks()).toBeTruthy();
    });

    it('should get a task', () => {        
        expect(service.getTask(1)).toBeTruthy();
      });

    it('should update a task', () => {     
        let task:Task;   
    expect(service.editTask(task)).toBeTruthy();
    });

    it('should delete a task', () => {        
    expect(service.deleteTask(1)).toBeTruthy();
    });    
});
 