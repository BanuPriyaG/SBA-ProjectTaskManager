import {SharedService} from './shared.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';
import {Task} from './models/task';
import { Http, Headers, Response } from "@angular/http";
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';

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
        let id:number;
      expect(service.addTask(task,id)).toBeTruthy();
    });
   
    it('should get all tasks', () => {        
      expect(service.getAllTasks()).toBeTruthy();
    });

    it('should get a task', () => {        
        expect(service.getTask(1)).toBeTruthy();
    });

    it('should get a task by Name', () => {        
        expect(service.getTaskByName('')).toBeTruthy();
    });

    it('should update a task', () => {     
        let task:Task;   
        expect(service.editTask(task)).toBeTruthy();
    });

    it('should delete a task', () => {        
        expect(service.deleteTask(1)).toBeTruthy();
    });    
    
    it('should search Tasks by project id', () => {        
        expect(service.searchTaskByProjID(1)).toBeTruthy();
        });    

    it('should get all the projects', () => {        
        expect(service.getAllProjects()).toBeTruthy();
        });    

    it('should get project and task details', () => {        
        expect(service.getProjectBasedTaskDetails()).toBeTruthy();
        });   

    it('should get project by project id', () => {        
        expect(service.getProjectById(1)).toBeTruthy();
        });   

    it('should get project by project name', () => {        
        expect(service.getProjectByName('')).toBeTruthy();
        }); 
        
    it('should add project', () => {  
        let project : Project;      
        expect(service.addProject(project)).toBeTruthy();
        });    

    it('should update project', () => {  
        let project : Project;            
        expect(service.editProject(project)).toBeTruthy();
        });    

    it('should delete project', () => {        
        expect(service.deleteProject(1)).toBeTruthy();
        });   

    it('should get user by id', () => {        
        expect(service.getUserById(1)).toBeTruthy();
        });   

    it('should get user by user name', () => {        
        expect(service.getUserByName('')).toBeTruthy();
        });   

    it('should add user', () => {  
        let user : User;      
        expect(service.addUser(user)).toBeTruthy();
        });    

    it('should update user', () => {  
        let user : User;            
        expect(service.editUser(user)).toBeTruthy();
        });    

    it('should delete user', () => {        
        expect(service.deleteUser(1)).toBeTruthy();
        });
    
    it('should get all users', () => {        
        expect(service.getAllUsers()).toBeTruthy();
        });  
});
 