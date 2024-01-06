import jwt from 'jsonwebtoken';
import dotnet from 'dotenv';

dotnet.config()

export const generateAccessToken = (user) => {
  const { id, email } = user;
  const payload = { id, email };
  return jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '24h'})
}
