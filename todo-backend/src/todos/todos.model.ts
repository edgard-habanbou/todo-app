import { Prisma } from '@prisma/client';

export class Todos implements Prisma.TodosCreateInput {
  title: string;
  description: string;
  priority?: number;
  date: Date;
  completed: boolean;
  userId: string;
}
