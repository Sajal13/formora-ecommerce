import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import jwtConfig from 'src/config/jwt.config';
import { AuthService } from '../auth.service';
import { JwtPayload } from 'src/user/type/auth-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(jwtConfig.KEY)
    private jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        jwtConfiguration.secret ??
        'mcFrUavmYkbuyNeOVCT0rRa+l2qIXUYJJjtmzT33g18=',
      ignoreExpiration: false
    });
  }

  validate(payload: JwtPayload) {
    const userId = payload.sub;

    return this.authService.validateJwtUser(userId);
  }
}
