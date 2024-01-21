import { generateAccessToken } from "./generateAccessToken.js"; 

export const prepareUsers = (users) => {
  return users.map((user) => {
    const { id, name, email, is_admin, is_blocked, createdAt, updatedAt } = user;

    return {
      id,
      name,
      email,
      is_admin,
      is_blocked,
      createdAt,
      updatedAt
    }
  })
  
}
