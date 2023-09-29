import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    userTask(userId:string){
        return `User Id From Task Related is ${userId}`;
    }
}
