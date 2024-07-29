import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { CreateTodoDto } from './create-todo.dto';

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {}

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
