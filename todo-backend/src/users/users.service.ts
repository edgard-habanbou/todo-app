import { PrismaService } from '../prisma.service';
import { Users } from './users.model';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUser(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async createUser(data: Users): Promise<Users> {
    const existingUser = await this.prisma.users.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    return this.prisma.users.create({ data });
  }
}
