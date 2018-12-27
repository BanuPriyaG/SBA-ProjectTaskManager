import { PipeTransform,Pipe } from "@angular/core";
import { User } from  '../models/user';
import { AddUserComponent } from '../ui/addUser/addUser.component';

@Pipe({
    name:'filterUser'    
})

export class FilterUserPipe implements PipeTransform {
    transform(users:User[], searchUser: string){
            if (users && users.length){
            return users.filter(i =>{
                if (searchUser && i.firstName.toLowerCase().indexOf(searchUser.toLowerCase()) === -1
            && i.lastName.toLowerCase().indexOf(searchUser.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return users;
        }
    }
}
