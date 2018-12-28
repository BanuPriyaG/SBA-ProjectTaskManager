import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewTaskComponent } from './ui/viewTask/viewTask.component';
import { AddTaskComponent } from './ui/addTask/addTask.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }from '@angular/forms';
import { EditTaskComponent } from './ui/editTask/editTask.component';
import { ReactiveFormsModule } from "@angular/forms";  
import { FilterProjectPipe } from '../app/pipe/filterProject.pipe';
import { FilterUserPipe } from '../app/pipe/filterUser.pipe';
import { OrderByPipe } from '../app/pipe/orderBy.pipe';
import { pipe } from 'rxjs';
import { AddUserComponent } from './ui/addUser/addUser.component';
import { AddProjectComponent } from './ui/addProject/addProject.component';

const appRoutes: Routes = [
  { path: 'ViewTask', component: ViewTaskComponent },
  { path:'AddUser', component:AddUserComponent},
  { path:'AddProject',component:AddProjectComponent},
  { path: 'AddTask', component:AddTaskComponent },
  { path: 'EditTask/:id', component: EditTaskComponent },
  { path: '', component:ViewTaskComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    AddTaskComponent,
    EditTaskComponent,
    FilterProjectPipe,
    AddUserComponent,
    AddProjectComponent,
    OrderByPipe,
    FilterUserPipe
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(appRoutes)],
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }
