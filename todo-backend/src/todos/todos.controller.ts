import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { TodosService } from './todos.service';

@Controller('/todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get('/all')
  async getAllTodos(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const todos = await this.todosService.getTodoByUser(
        request.body.userId as string,
      );
      return response.status(200).json(todos);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  @Post('/')
  async createTodo(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const todo = await this.todosService.createTodo({
        title: request.body.title,
        description: request.body.description,
        priority: request.body.priority,
        date: request.body.date,
        userId: request.body.userId,
      });
      return response.status(201).json(todo);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  @Put('/:id')
  async updateTodo(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const todoId = request.params.id;
      const updateFields: any = {};

      if (request.body.title !== undefined) {
        updateFields.title = request.body.title;
      }
      if (request.body.description !== undefined) {
        updateFields.description = request.body.description;
      }
      if (request.body.priority !== undefined) {
        updateFields.priority = request.body.priority;
      }
      if (request.body.completed !== undefined) {
        updateFields.completed = request.body.completed;
      }
      if (request.body.date !== undefined) {
        updateFields.date = new Date(request.body.date);
      }
      const todo = await this.todosService.updateTodoById(todoId, updateFields);

      return response.status(200).json(todo);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  @Delete('/:id')
  async deleteTodo(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const todo = await this.todosService.deleteTodoById(request.params.id);
      return response.status(200).json(todo);
    } catch (error) {
      return response.status(500).json({ message: 'Todo does not exist!' });
    }
  }
}
