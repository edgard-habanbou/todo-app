import { Prisma } from '@prisma/client';

export class Todos implements Prisma.TodoCreateInput {
  title: string;
  description: string;
  priority?: number;
  date: Date;
  completed: boolean;
  userId: number;
}
