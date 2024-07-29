import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoRepository } from './todo.repository';
import { TypeOrmExModule } from 'src/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([TodoRepository])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
