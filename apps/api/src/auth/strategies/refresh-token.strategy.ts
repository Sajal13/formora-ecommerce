import {
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import refreshConfig from 'src/config/refresh.config';
import { AuthService } from '../auth.service';
import { JwtPayload } from 'src/user/type/auth-jwt';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh-jwt'
) {
  constructor(
    @Inject(refreshConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshConfig>,
    private readonly authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromHeader('x-refresh-token'),
        ExtractJwt.fromBodyField('refresh')
      ]),
      secretOrKey:
        refreshTokenConfig.secret ??
        'Xi8sLhLbjITaaKj3itxhks9zdi3cUqkVaR6XHaYS/k4=',
      ignoreExpiration: false,
      passReqToCallback: true
    });
  }

  validate(req: Request, payload: JwtPayload) {
    const userId = payload.sub;

    const refreshToken =
      (req.headers['x-refresh-token'] as string) ||
      (req.body as { refresh?: string }).refresh;

    if (!refreshToken)
      throw new UnauthorizedException({
        status: HttpStatus.UNAUTHORIZED,
        message: 'Refresh Token Missing'
      });

    return this.authService.validateRefreshToken(userId, refreshToken);
  }
}
