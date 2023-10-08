import { Body, Controller, Get, Param, Post, HttpException, HttpStatus, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { TasksService } from 'src/tasks/tasks.service';
import { DuplicateEmailException } from 'src/exception/duplicate-email.exception';

@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService, private readonly taskservice: TasksService) { }

    /**
     * 
     * @param id 
     * @returns 
     */
    @Get()
    getUsers() {

    }

    /**
     * 
    */
    @Post()
    async createUser(@Res() res:any, @Body() createUserDto: CreateUserDto) {
        const userCreate = this.userservice.createUser(createUserDto);
        return userCreate.then((result) => {
            console.log("Creating...");
            console.log(result);
            return res.json(result);
        }).catch((err) => {
            return res.status(200).json(
                {
                    success: false,
                    message: "failed",
                    error: err.response
                });
        });
        // try {
        //     return this.userservice.createUser(createUserDto);
        // } catch (error) {
        //     if (error instanceof DuplicateEmailException) {
        //         throw new HttpException('Email is already in use', HttpStatus.CONFLICT);
        //     }
        //     throw error; // Rethrow other errors
        // }
    }

    @Get('find/:id')
    async findOneUser(@Param('id') id: number) {
        const user = this.userservice.findUser(id);
        return user.then((result) => {
            return {
                name: result.name,
                email: result.email,
            }
        }).catch((err) => {
            return err;
        });
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    @Get('task/:id')
    findTask(@Param('id') id: string) {
        return this.taskservice.userTask(id); ``
    }
}
