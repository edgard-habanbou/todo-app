import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, AuthModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
