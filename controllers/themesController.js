import { ThemesTB } from "../db/index.js";

class tagsController {
  async getThemes (req, res) {
    try {
      const themes = await ThemesTB.findAll();
      res.json(themes)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Themes error'})
    }
  }
}

export default new tagsController();
