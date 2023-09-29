import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TasksModule, UserModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
