import { CollectionsTB, UsersTB, ThemesTB, FieldsMapsTB } from "../db/index.js";

class collectionsController {
  async getAllCollections (req, res) {
    try {
      const { limit=100, offset=0 } = req.query;
      const collections = await CollectionsTB.findAll({
        limit: limit,
        offset: offset,
        attributes: {
          exclude:['fields_map_id', 'theme_id', 'user_id']
        },
        include: [{
          model: UsersTB,
          attributes: ['id', 'name']
        }, {
          model: ThemesTB,
        }]
      });
      res.json(collections)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Collections error'})
    }
  }

  async getMyCollections (req, res) {
    try {
      const { limit=100, offset=0 } = req.query;
      const { id } = req.user;
      const collections = await CollectionsTB.findAll({
        limit: limit,
        offset: offset,
        where: {
          user_id: id
        },
        attributes: {
          exclude:['fields_map_id', 'theme_id', 'user_id']
        },
        include: [{
          model: UsersTB,
          attributes: ['id', 'name']
        }, {
          model: ThemesTB,
        }]
      });
      res.json(collections)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Collections error'})
    }
  }
  async getBigestCollections (req, res) {
    try {
      const { id } = req.user;
      const collections = await CollectionsTB.findAll({
        limit: 5,
        offset: offset,
        attributes: {
          exclude:['fields_map_id', 'theme_id', 'user_id']
        },
        include: [{
          model: UsersTB,
          attributes: ['id', 'name']
        }, {
          model: ThemesTB,
        }]
      });
      res.json(collections)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Collections error'})
    }
  }
  async deleteCollections (req, res) {
    try {
      const { IDs } = req.body;
      await CollectionsTB.destroy({
        where: {
          id: IDs
        },
      });

      res.json(IDs)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Collections error'})
    }
  }
  async createCollection (req, res) {
    try {
      const {collectionInfo, fieldsMap} = req.body;
      const {id} = req.user;

      const fields_map = await FieldsMapsTB.create(fieldsMap);
      const collection = await CollectionsTB.create({
        user_id: id,
        ...collectionInfo,
        fields_map_id: fields_map.id
      });

      return res.json(collection)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Registration error'})
    }
  }
}

export default new collectionsController();
