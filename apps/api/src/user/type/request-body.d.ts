import { Request } from 'express';
import { User } from '../entities/user.entity';

export interface RequestBodyForUser extends Request {
  user: User;
}
