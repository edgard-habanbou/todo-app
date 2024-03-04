import { Controller, Get, Req, Res } from '@nestjs/common';
import { Todos } from './todos.model';
import { Request, Response } from 'express';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly TodosService: TodosService) {}

  @Get('/todos')
  async getAllTodos(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Todos[]> {
    try {
      const todos = await this.TodosService.getAllTodo();
      return response.status(200).json(todos);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
