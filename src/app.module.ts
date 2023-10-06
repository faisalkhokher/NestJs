import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import config from 'ormconfig';

@Module({
  imports: [TasksModule, UserModule , TypeOrmModule.forRoot(config), AuthModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
