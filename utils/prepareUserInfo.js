import { generateAccessToken } from "./generateAccessToken.js"; 

export const prepareUserInfo = (user) => {
  const { id, name, email, is_admin } = user;
  const token = generateAccessToken(user);

  return {
    id,
    name,
    email,
    is_admin,
    token
  }
}
