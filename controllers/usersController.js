import { UsersTB } from "../db/index.js";
import { prepareUsers } from "../utils/prepareUsers.js";

class usersController {
  async getUsers (req, res) {
    try {
      const users = await UsersTB.findAll();
      res.json(prepareUsers(users))
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Users error'})
    }
  }
  async deleteUsers (req, res) {
    try {
      const { IDs } = req.body;
      await UsersTB.destroy({
        where: {
          id: IDs
        },
      });
      
      const users = await UsersTB.findAll();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Delete error'})
    }
  }
  async updateUser (req, res) {
    try {
      const { IDs, updates } = req.body;
      await UsersTB.update(updates,{
        where: {
          id: IDs
        },
      });
      
      const users = await UsersTB.findAll();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Update error'})
    }
  }
}

export default new usersController();
