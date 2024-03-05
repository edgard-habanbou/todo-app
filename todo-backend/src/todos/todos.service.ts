import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async getAllTodo(): Promise<any> {
    return this.prisma.todos.findMany();
  }

  async createTodo(data: any): Promise<any> {
    return this.prisma.todos.create({
      data,
    });
  }

  async updateTodoById(id: number, data: any): Promise<any> {
    return this.prisma.todos.update({
      where: {
        id: id.toString(),
      },
      data,
    });
  }

  async deleteTodoById(id: number): Promise<any> {
    return this.prisma.todos.delete({
      where: {
        id: id.toString(),
      },
    });
  }

  async getTodoByUser(userId: number): Promise<any> {
    return this.prisma.todos.findMany({
      where: {
        userId: userId.toString(),
      },
    });
  }
}
