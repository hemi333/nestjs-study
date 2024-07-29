import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  getTodo() {
    return 'Hello World!'
  }
}
