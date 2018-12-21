import { PipeTransform,Pipe } from "@angular/core";
import { Task } from  '../models/task';
import { ViewTaskComponent } from '../ui/viewTask/viewTask.component';
import { isoStringToDate } from "@angular/common/src/i18n/format_date";

@Pipe({
    name:'filterTask'    
})

export class FilterTaskPipe implements PipeTransform {
    transform(tasks:Task[], searchByProjectName: string){
            if (tasks && tasks.length){
            return tasks.filter(i =>{
                // if (searchByProjectName && i.task.toLowerCase().indexOf(searchByProjectName.toLowerCase()) === -1){
                //     return false;
                // }
                return true;
           })
        }
        else{
            return tasks;
        }
    }
}
