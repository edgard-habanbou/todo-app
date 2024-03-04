import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 20)
  password: string;

  @IsString()
  @Length(2, 20)
  name: string;
}
