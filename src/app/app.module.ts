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
import { FilterTaskPipe } from '../app/pipe/filterTask.pipe';
import { pipe } from 'rxjs';

const appRoutes: Routes = [
  { path: 'ViewTask', component: ViewTaskComponent },
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
    FilterTaskPipe
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
