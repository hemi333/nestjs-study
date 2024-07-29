import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/todo.entity';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'testuser',
      password: 'testpwd',
      database: 'testdb',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Todo],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
