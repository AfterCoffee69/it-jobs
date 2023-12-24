const { RequirementsCategory } = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
    async create(req, res) {
        const { name } = req.body;
        const category = await RequirementsCategory.create({ name });
        return res.json(category);
    }
}

module.exports = new CategoryController();