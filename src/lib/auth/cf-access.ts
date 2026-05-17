import { createRemoteJWKSet, jwtVerify } from 'jose';
import { config } from '../../config.js';

export interface UserInfo {
  email: string;
  name?: string;
  sub: string;
}

const JWKS = createRemoteJWKSet(new URL(`${config.cfAccess.domain}/cdn-cgi/access/certs`));

export async function verifyAccessToken(token: string, aud: string): Promise<UserInfo> {
  const { payload } = await jwtVerify(token, JWKS, {
    issuer: config.cfAccess.domain,
    audience: aud,
  });
  return {
    email: payload['email'] as string,
    name: payload['name'] as string | undefined,
    sub: payload.sub!,
  };
}

export function getDevUser(env: { DEV_USER_EMAIL?: string; DEV_USER_NAME?: string }): UserInfo | null {
  if (!env.DEV_USER_EMAIL) return null;
  return {
    email: env.DEV_USER_EMAIL,
    name: env.DEV_USER_NAME ?? undefined,
    sub: 'dev',
  };
}
