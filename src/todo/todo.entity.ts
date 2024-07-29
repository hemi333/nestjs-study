import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { TodoStatus } from './todo-status.enum';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TodoStatus;

  // 'date' 타입 사용
  @Column('date', {
    default: () => `CURRENT_DATE + INTERVAL '7 days`, // 현재 날짜에서 7일 뒤로 설정
  })
  dueDate: Date;

  @CreateDateColumn()
  createdAt: Date;
}
