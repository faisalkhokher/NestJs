import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { TasksService } from 'src/tasks/tasks.service';

@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService,private readonly taskservice:TasksService) { }

    /**
     * 
     * @param id 
     * @returns 
     */
    @Get(':id')
    getUsers(@Param("id") id: string) {
        return ({
            user: {
                id: id
            }
        })
    }

    /**
     * 
    */
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userservice.createUser(createUserDto);
    }

    @Get('find/:id')
    findOne(@Param('id') id: string) {
        return this.userservice.findUser(id);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    @Get('task/:id')
    findTask(@Param('id') id:string){
        return this.taskservice.userTask(id);``
    }
}
