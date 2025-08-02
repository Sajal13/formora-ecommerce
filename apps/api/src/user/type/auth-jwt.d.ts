import { ROLE } from './role.enum';

export type JwtPayload = {
  sub: number;
  role: ROLE;
};
