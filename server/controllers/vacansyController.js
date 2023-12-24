const { Vacancies, VacanciesRequirements, VacanciesCategory, User, Requirements, Response } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path');
const { Op } = require('sequelize')

class vacansyController {
    async create(req, res) {
        let { name, userId, vacanciseCategoryId, description } = req.body
        let { requirements } = req.body
        const { img } = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const Vacancy = await Vacancies.create({
            name: name,
            userId: userId,
            vacanciseCategoryId: vacanciseCategoryId,
            description: description, img: fileName
        })

        const id = Vacancy.id;

        const requirementIds = requirements.split(',').map(Number);
        for (const requirement of requirementIds) {
            await VacanciesRequirements.create({ vacancyId: id, requirementId: requirement });
        }

        return res.json(Vacancy)
    }

    async update(req, res) {
        const { id, name, categoryId, description } = req.body;

        const vacansy = await Vacancies.findOne({ where: { id } })

        vacansy.name = name,
        vacansy.vacanciseCategoryId = categoryId,
        vacansy.description = description

        await vacansy.save()

        return res.json(vacansy);
    }

    async getAllVacancy(req, res) {
        let { name, categoryId, limit, page } = req.query;

        page = page || 1;
        limit = limit || 9;

        let offset = page * limit - limit;
        let vacansies;
        let whereClause = {};

        if (categoryId) {
            whereClause.vacanciseCategoryId = categoryId;
        }

        if (name) {
            whereClause.name = { [Op.iLike]: `%${name.toLowerCase()}%` };
        }

        vacansies = await Vacancies.findAndCountAll({
            where: whereClause,
            limit,
            offset,
            include: [
                { model: User, as: 'user' },
                { model: VacanciesCategory, as: 'vacanciseCategory' },
                { model: Requirements, as: 'requirements' }
            ]
        });

        return res.json(vacansies);
    }

    async getAllCategory(req, res) {
        const categories = await VacanciesCategory.findAll()
        return res.json(categories)
    }

    async getVacancyById(req, res) {
        const { id } = req.params
        const vacancy = await Vacancies.findOne({
            where: { id },
            include: [
                { model: User, as: 'user' },
                { model: VacanciesCategory, as: 'vacanciseCategory' },
                { model: Requirements, as: 'requirements' },
                {
                    model: Response,
                    as: 'Responses',
                    include: [
                        { model: User, as: 'user' }
                    ]
                }
            ]
        })
        return res.json(vacancy)
    }
}

module.exports = new vacansyController();