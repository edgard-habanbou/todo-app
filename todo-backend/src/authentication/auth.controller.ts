import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user-dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Req() req: Request,
    @Res() res: Response,
    @Body() LoginDto: LoginDto,
  ): Promise<any> {
    try {
      const user = await this.authService.login(LoginDto);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  @Post('/register')
  async register(
    @Req() req: Request,
    @Res() res: Response,
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<any> {
    try {
      const user = await this.authService.registerUser(registerUserDto);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
