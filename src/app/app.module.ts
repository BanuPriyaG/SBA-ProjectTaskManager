import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewComponent } from './ui/view/view.component';
import { AddComponent } from './ui/add/add.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }from '@angular/forms';
import { EditComponent } from './ui/edit/edit.component';
import { ReactiveFormsModule } from "@angular/forms";  
import { FilterTaskPipe } from '../app/pipe/filterTask.pipe';
import { pipe } from 'rxjs';

const appRoutes: Routes = [
  { path: 'ViewTask', component: ViewComponent },
  { path: 'AddTask', component:AddComponent },
  { path: 'EditTask/:id', component: EditComponent },
  { path: '', component:ViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    EditComponent,
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
