import { UsersTB } from "../db/index.js";

class authController {
  async login (req, res) {
    try {
      const {email, password} = req.body;
      const user = await UsersTB.findOne({ where: { email } });
      const isValidPassword = password == user.password;
      if (!user || !isValidPassword) {
          return res.status(400).json({message: `Invalid email or password!`})
      }
      return res.json(user)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Login error'})
    }
  }
  
  async registration (req, res) {
    try {
      const {name, email, password} = req.body;
      const candidate = await UsersTB.findOne({ where: { email } });
      if (candidate) {
        return res.status(400).json({message: 'User with this email exists!'})
      }

      const user = await UsersTB.create({
        name, 
        email, 
        password,
      });

      return res.json(user)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Registration error'})
    }
  }
}

export default new authController();
