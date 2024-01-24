import { CollectionsTB } from "../db/index.js";
import { UsersTB } from "../db/index.js";

class collectionsController {
  async getAllCollections (req, res) {
    try {
      const { limit=100, offset=0 } = req.query;
      const collections = await CollectionsTB.findAll({
        limit: limit,
        offset: offset,
        attributes: {
          exclude:['fields_map_id']
        },
        include: [{
          model: UsersTB,
          attributes: ['id', 'name']
        }]
      });
      res.json(collections)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Collections error'})
    }
  }
}

export default new collectionsController();
