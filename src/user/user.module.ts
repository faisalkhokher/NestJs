import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TasksService } from 'src/tasks/tasks.service';

@Module({
  controllers: [UserController],
  providers: [UserService,TasksService]
})
export class UserModule {}
