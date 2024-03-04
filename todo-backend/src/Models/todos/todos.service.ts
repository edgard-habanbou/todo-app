import { PrismaService } from 'nestjs-prisma';
import { Todos } from './todos.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async getAllTodo(): Promise<Todos[]> {
    return this.prisma.todo.findMany();
  }
}
