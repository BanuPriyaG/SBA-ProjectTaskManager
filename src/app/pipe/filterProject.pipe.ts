import { PipeTransform,Pipe } from "@angular/core";
import { Project } from  '../models/project';
import { AddProjectComponent } from '../ui/addProject/addProject.component';
import { ProjTasks } from "src/app/models/projTask";

@Pipe({
    name:'filterProject'    
})

export class FilterProjectPipe implements PipeTransform {
    transform(projectTaskDetails:ProjTasks[], searchProject: string){
            if (projectTaskDetails && projectTaskDetails.length){
            return projectTaskDetails.filter(i =>{
                if (searchProject && i.project.toLowerCase().indexOf(searchProject.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return projectTaskDetails;
        }
    }
}
