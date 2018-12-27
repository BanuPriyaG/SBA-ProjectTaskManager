import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { resource } from 'selenium-webdriver/http';
import { FilterUserPipe }from '../../pipe/filterUser.pipe';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})
export class AddUserComponent implements OnInit {
  user=new User();
  usersList:User[]=[];
  addUserForm: FormGroup; 
  searchUser:string;
  sortingName: string;
  isDesc: boolean;

  constructor(
    private _service:SharedService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addUserForm = this._formBuilder.group({      
      firstName: ['', Validators.required],        
      lastName: ['', Validators.required],
      empID: ['', [Validators.required]]
    });

    this._service.getAllUsers().subscribe(
      data => this.usersList = data,
      error => console.error(error))   

  }

  AddUser()  {    
    //console.log(this.user);
    if(document.getElementById("btnSubmit").innerText == "Add")
    {
      this._service.addUser(this.user).subscribe(
        result => console.log(result),
        error => console.error(error)
      )        
    }
    else if(document.getElementById("btnSubmit").innerText == "Update")
    {
      //console.log(this.user);
      this._service.editUser(this.user).subscribe(
        result => console.log(result),
        error => console.error(error)
      ) 
      document.getElementById("btnSubmit").innerText = "Add";
    }
    window.location.reload();
  }

  Edit(userID)  {
    this._service.getUserById(userID).subscribe(
      data =>{ 
        this.user = data;
        document.getElementById("btnSubmit").innerText = "Update";
      },
      error => console.error(error)
    )
  }

  Delete(userID)  {
    this._service.deleteUser(userID).subscribe(
      result => console.log(result),
      error => console.error(error)
    )
    window.location.reload();
  }

  sort(name: string): void {
    if (name && this.sortingName !== name) {
      this.isDesc = false;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.sortingName = name;
  }

  Reset()
  {
    this.user.firstName = '';
    this.user.lastName='';
    this.user.employee_ID =null;
  }
}
