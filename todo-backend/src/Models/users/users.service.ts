import { PrismaService } from 'nestjs-prisma';
import { Users } from './users.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUser(): Promise<Users[]> {
    return this.prisma.user.findMany();
  }
}
