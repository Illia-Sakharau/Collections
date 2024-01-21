import jwt from 'jsonwebtoken';
import dotnet from 'dotenv';
import { UsersTB } from "../db/index.js";

dotnet.config()

export default async function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({message: "User is anonym!"})
    }
    const decodedData = jwt.verify(token, process.env.JWT_KEY);
    const user = await UsersTB.findOne({ where: { email: decodedData.email } });
    if (!user) {
      return res.status(401).json({message: "User does not exist!"})
    }
    if (user.is_blocked) {
      return res.status(401).json({message: "This user is blocked!"})
    }
    if (!user.is_admin) {
      return res.status(403).json({message: "You do not have permission for this information!"})
    }

    req.user = decodedData;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({message: "User is anonym!"})
  }
};