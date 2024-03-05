import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async createTodo(data: any): Promise<any> {
    return this.prisma.todos.create({
      data,
    });
  }

  async updateTodoById(id: string, data: any): Promise<any> {
    return this.prisma.todos.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteTodoById(id: string): Promise<any> {
    return this.prisma.todos.delete({
      where: {
        id: id,
      },
    });
  }

  async getTodoByUser(userId: string): Promise<any> {
    return this.prisma.todos.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async getTodoById(id: string): Promise<any> {
    return this.prisma.todos.findUnique({
      where: {
        id: id,
      },
    });
  }
}
