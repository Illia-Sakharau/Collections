import { TagsTB } from "../db/index.js";

class tagsController {
  async getTags (req, res) {
    try {
      const { limit=20, offset=0 } = req.query
      const tags = await TagsTB.findAll({
        limit: limit,
        offset: offset,
      });
      res.json(tags)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Tags error'})
    }
  }
}

export default new tagsController();
