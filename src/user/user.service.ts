import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
    
    findUser(id:string){
        return {
            success : true,
            id : id
        }
    }

    createUser(createUserDto:CreateUserDto){
        return createUserDto;
    }
}
