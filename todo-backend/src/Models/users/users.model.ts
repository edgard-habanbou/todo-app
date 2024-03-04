import { Prisma } from '@prisma/client';

export class Users implements Prisma.UserCreateInput {
  name: string;
  email: string;
  password: string;
}
