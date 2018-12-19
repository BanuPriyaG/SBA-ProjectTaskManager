import { PipeTransform,Pipe } from "@angular/core";
import { Task } from  '../models/task';
import { ViewComponent } from '../ui/view/view.component';
import { isoStringToDate } from "@angular/common/src/i18n/format_date";

@Pipe({
    name:'filterTask'    
})

export class FilterTaskPipe implements PipeTransform {
    transform(tasks:Task[], searchTask: string, searchParentTask: string,
        startSearch:Date,endSearch:Date,searchPriorityFrom:number,searchPriorityTo:number){
            if (tasks && tasks.length){
            return tasks.filter(i =>{
                if (searchTask && i.task.toLowerCase().indexOf(searchTask.toLowerCase()) === -1){
                    return false;
                }
                if (searchParentTask && i.parentTask.toLowerCase().indexOf(searchParentTask.toLowerCase()) === -1){
                    return false;
                }
                if (startSearch && i.start_Date === startSearch){   
                                      
                }
                if (searchPriorityTo && searchPriorityTo < i.priority) {   
                    return false
                }
                if(searchPriorityFrom && searchPriorityFrom > i.priority ){
                    return false;
                }
                console.log(startSearch + '    ' + i.start_Date)
                return true;
           })
        }
        else{
            return tasks;
        }
    }
}
