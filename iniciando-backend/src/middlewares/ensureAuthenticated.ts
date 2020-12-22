import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload{
  iat: number;
  exp: number;
  sub: string;
}


export default function ensureAuthenticated(
  resquest: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = resquest.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT Token is missing');
  }

  const [, token] = authHeader.split(' ');
  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const{sub} = decoded as TokenPayload;

    resquest.user = {
      id:sub,
    }

    return next();
  } catch {
    throw new Error('Invalid JWT Token');
  }
}
