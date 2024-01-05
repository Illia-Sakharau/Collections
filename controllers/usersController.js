import { sequelize, usersTB } from "../db/index.js";

class usersController {
  async getUsers (req, res) {
    try {
      const users = await usersTB.findAll();
      res.json(users)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Users error'})
    }
  }
}

export default new usersController();
