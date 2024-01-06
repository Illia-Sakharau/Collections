import jwt from 'jsonwebtoken';
import dotnet from 'dotenv';

dotnet.config()

export default function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(403).json({message: "User is anonym!"})
    }
    const decodedData = jwt.verify(token, process.env.JWT_KEY);
    req.user = decodedData;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({message: "User is anonym!"})
  }
};