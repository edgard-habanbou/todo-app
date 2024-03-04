import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async getAllTodo(): Promise<any> {
    return this.prisma.todos.findMany();
  }
}
