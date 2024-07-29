import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  // todoService를 DI
  constructor(private todoService: TodoService) {}
  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return;
  }
}
