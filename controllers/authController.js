import { usersTB } from "../db/index.js";

class authController {
  async registration (req, res) {
    try {
      const {name, email, password} = req.body;
      const candidate = await usersTB.findOne({ where: { email } });
      if (candidate) {
        return res.status(400).json({message: 'User with this email exists!'})
      }

      const user = await usersTB.create({
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
