const { Category, VacanciesCategory, RequirementsCategory, Vacancies } = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
    async getAll(req, res) {
        const categories = await Category.findAll();
        return res.json(categories);
    }

    async delete(req, res) {
        const { id } = req.params;
        await Category.destroy({ where: { id } });
        return res.json({ message: 'Категория успешно удалена' });
    }

    async create(req, res) {
        const { name } = req.body;
        const category = await Category.create({ name });
        return res.json(category);
    }

    async delVacansyCateory(req, res) {
        const { id } = req.params
        await Vacancies.destroy({ where: { vacanciseCategoryId: id } });

        await VacanciesCategory.destroy({ where: { id } })
        return res.json('del ok');
    }

    async createVacansy(req, res) {
        const { name } = req.body;
        try {
            const category = await VacanciesCategory.create({ name });
            return res.json(category);
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ error: 'Name already exists' });
            }
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getAllCategoryVacansyReq(req, res) {
        const categories = await RequirementsCategory.findAll();
        return res.json(categories);
    }
}

module.exports = new CategoryController();