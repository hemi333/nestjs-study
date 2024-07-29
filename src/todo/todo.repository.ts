import { CustomRepository } from 'src/typeorm-ex.decorator';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';

@CustomRepository(Todo)
export class TodoRepository extends Repository<Todo> {}
