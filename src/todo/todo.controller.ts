import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';
import { SearchTodoDto } from './search-todo.dto';
import { Todo } from './todo.entity';
import { UpdateTodoStatusDto } from './update-todo-status.dto';

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

  @Patch('/:id/status')
  async updateTodoStatusById(
    @Param('id') id: string,
    @Body('status') updateTodoStatusDto: UpdateTodoStatusDto,
  ): Promise<Todo> {
    const { status } = updateTodoStatusDto;
    return this.todoService.updateTaskStatusById(id, status);
  }
}
