import { jwtVerify } from "jose";

export async function verifyAccessToken(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);

  const { payload } = await jwtVerify(token, secret);

  return payload;
}
