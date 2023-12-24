const { RequirementsCategory, Requirements } = require('../models/models');
const ApiError = require('../error/ApiError');

class reqController {
    async create(req, res) {
        const { name, id } = req.body;
        const reqirement = await Requirements.create({ name: name, RequirementsCategoryId: id });
        return res.json(reqirement);
    }

    
    async getAll(req, res) {
        const reqirements = await Requirements.findAll()
        return res.json(reqirements);
    }
}

module.exports = new reqController();