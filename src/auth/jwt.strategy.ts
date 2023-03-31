import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
  }
  async validate(payload: any) {
    return {
      id: payload.id,
      username: payload.username,
      password: payload.password,
      createdat: payload.createdat,
      updatedat: payload.updatedat,
      // firstname: payload.firstname,
      // lastname: payload.lastname,
      // orderDetails: payload.orderDetails,
    };
  }
}
