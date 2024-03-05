import { PassportStrategy } from '@nestjs/passport';
import { PrismaService } from '../prisma.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly PrismService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { id: string }) {
    const user = await this.PrismService.users.findUnique({
      where: { id: payload.id },
    });
    return user;
  }
}
