import { generateAccessToken } from "./generateAccessToken.js"; 

export const prepareUsers = (users) => {
  return users.map((user) => {
    const { id, name, email, is_admin, createdAt, updatedAt } = user;

    return {
      id,
      name,
      email,
      is_admin,
      createdAt,
      updatedAt
    }
  })
  
}
