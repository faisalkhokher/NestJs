import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';

@Module({
  imports: [TasksModule, UserModule , TypeOrmModule.forRoot(config)],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
