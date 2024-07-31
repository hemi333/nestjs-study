import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';
import { SearchTodoDto } from './search-todo.dto';
import { Todo } from './todo.entity';
import { UpdateTodoStatusDto } from './update-todo-status.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decrator';

@Controller('todo')
@UseGuards(AuthGuard())
export class TodoController {
  // todoService를 DI
  constructor(private todoService: TodoService) {}

  @Post()
  async createTodo(
    @Body() createTodoDto: CreateTodoDto,
    @GetUser() user,
  ): Promise<Todo> {
    return this.todoService.create(createTodoDto, user);
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
