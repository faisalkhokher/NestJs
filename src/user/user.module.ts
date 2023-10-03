import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TasksService } from 'src/tasks/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService,TasksService]
})
export class UserModule {}
