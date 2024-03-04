import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get('/todos')
  async getAllTodos(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const todos = await this.todosService.getAllTodo();
      return response.status(200).json(todos);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
