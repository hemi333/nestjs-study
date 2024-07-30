import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';
import { SearchTodoDto } from './search-todo.dto';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  // todoService를 DI
  constructor(private todoService: TodoService) {}

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  async getTodos(@Query() searchDto: SearchTodoDto): Promise<Todo[]> {
    return this.todoService.getTodos(searchDto);
  }

  @Get('/:id')
  async getTodoById(@Param('id') id: string): Promise<Todo> {
    return this.todoService.getTodoById(id);
  }

  @Delete('/:id')
  async deleteTodoById(@Param('id') id: string): Promise<void> {
    return this.todoService.deleteTodoById(id);
  }
}
