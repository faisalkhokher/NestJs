import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { DuplicateEmailException } from 'src/exception/duplicate-email.exception';


@Injectable()
export class UserService {

    // Get User Module
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

    findUser(id:number) {
        const userObj = this.userRepo.findOne({
            where : {
                id : id
            }
        });
        return userObj;
    }

    async createUser(createUserDto: CreateUserDto) {
        console.log("Create Function");
        console.log(createUserDto);

        try {
            // Save methods // 
            // const user = this.userRepo.create(createUserDto);  // * (Simple Way) Option 1
            const user = new User(); // * Option 2
            user.name = createUserDto.name;
            user.email = createUserDto.email;
            user.password = createUserDto.password;
            return await this.userRepo.save(user);
        } catch (error) {
            if (error instanceof QueryFailedError && error.message.includes('duplicate key value violates unique constraint')) {
                throw new DuplicateEmailException; // Throw the custom exception
              }
            throw error; // Rethrow other errors
        }
    }

    async findOneWithUserName(userName: string) {
        console.log(userName);
        const user = await this.userRepo.findOne({ where: { email: userName } });
        console.log("User service");
        console.log(user);
        console.log("------------");
        return user
    }
}
