import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-user.dto';
import { PrismaService } from 'src/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register-user-dto';
import { Users } from '../users/users.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(LoginDto: LoginDto): Promise<any> {
    const { email, password } = LoginDto;

    const user = await this.prismaService.users.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      throw new NotFoundException('Invalid password');
    }

    const payload = { userId: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<any> {
    const { email, password, name } = registerUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = new Users();
    createUser.email = email;
    createUser.password = hashedPassword;
    createUser.name = name;

    const user = await this.usersService.createUser(createUser);

    const payload = { email: user.email };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
