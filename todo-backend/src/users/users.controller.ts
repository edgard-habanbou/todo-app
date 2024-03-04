import { Controller, Get, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const users = await this.usersService.getAllUser();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
