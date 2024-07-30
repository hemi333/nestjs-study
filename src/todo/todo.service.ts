import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { CreateTodoDto } from './create-todo.dto';
import { SearchTodoDto } from './search-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {}

  async getTodos(searchTodoDto: SearchTodoDto): Promise<Todo[]> {
    return this.todoRepository.getTodos(searchTodoDto);
  }

  async getTodoById(id: string): Promise<Todo> {
    return this.todoRepository.findOne({ where: { id: id } });
  }

  async deleteTodoById(id: string): Promise<void> {
    const result = await this.getTodoById(id);
    if (!result) {
      throw new NotFoundException(`Todo with ID "${id}" not found`);
    }
    this.todoRepository.delete(id);
  }

  async create(createTodoDto: CreateTodoDto) {
    const { title, description, status, dueDate } = createTodoDto;

    let finalDueDate = dueDate;
    if (!finalDueDate) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 3); // 3일 추가
      finalDueDate = currentDate;
    }

    return this.todoRepository.save({
      title,
      description,
      status,
      dueDate: finalDueDate,
    });
  }
}
