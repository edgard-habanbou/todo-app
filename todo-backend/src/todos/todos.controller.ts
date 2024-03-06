import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { TodosService } from './todos.service';

@Controller('/todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get('/')
  async getAllTodos(
    @Req() request: Request & { user: { id: string } },
    @Res() response: Response,
  ): Promise<Response> {
    try {
      const todos = await this.todosService.getTodoByUser(request.user.id);
      return response.status(200).json(todos);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Something went wrong please try again!' });
    }
  }

  @Get('/:id')
  async getTodoById(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    try {
      const todo = await this.todosService.getTodoById(request.params.id);
      return response.status(200).json(todo);
    } catch (error) {
      return response.status(500).json({ message: 'Todo does not exist!' });
    }
  }

  @Post('/')
  async createTodo(
    @Req() request: Request & { user: { id: string } },
    @Res() response: Response,
  ): Promise<Response> {
    try {
      const todo = await this.todosService.createTodo({
        ...request.body,
        userId: request.user.id,
      });
      return response.status(200).json({
        message: 'Todo created successfully!',
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Something went wrong please try again!' });
    }
  }

  @Put('/:id')
  async updateTodo(
    @Req() request: Request & { user: { id: string } },
    @Res() response: Response,
  ): Promise<Response> {
    try {
      const todoId = request.params.id;
      const unUpdatedTodo = await this.todosService.getTodoById(todoId);

      if (unUpdatedTodo.userId !== request.user.id) {
        return response.status(401).json({ message: 'Unauthorized' });
      }

      const updateFields = {
        title: request.body.description,
        description: request.body.description,
        priority: request.body.priority,
        completed:
          request.body.completed === undefined ? false : request.body.completed,
        date: request.body.date ? new Date(request.body.date) : undefined,
      };

      const todo = await this.todosService.updateTodoById(todoId, updateFields);
      return response.status(200).json(todo);
    } catch (error) {
      console.log(error.message);
      return response
        .status(500)
        .json({ message: 'Something went wrong please try again!' });
    }
  }

  @Delete('/:id')
  async deleteTodo(
    @Req() request: Request & { user: { id: string } },
    @Res() response: Response,
  ): Promise<Response> {
    try {
      const unDeletedTodo = await this.todosService.getTodoById(
        request.params.id,
      );

      if (unDeletedTodo.userId !== request.user.id) {
        return response.status(401).json({ message: 'Unauthorized' });
      }

      const todo = await this.todosService.deleteTodoById(request.params.id);
      return response.status(200).json(todo);
    } catch (error) {
      return response.status(500).json({ message: 'Todo does not exist!' });
    }
  }
}
