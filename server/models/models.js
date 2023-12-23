const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, unique: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const UserSkills = sequelize.define('userSkills', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_skills: { type: DataTypes.STRING, allowNull: false },
    leetcode_url: { type: DataTypes.STRING, allowNull: true },
})

const Vacancies = sequelize.define('vacancies', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
})

const VacanciesCategory = sequelize.define('vacanciseCategory', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
})

const RequirementsCategory = sequelize.define('RequirementsCategory', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})

const Requirements = sequelize.define('requirements', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})

const VacanciesRequirements = sequelize.define('vacanciesRequirements', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Response = sequelize.define('Response', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasMany(Response);
Response.belongsTo(User);

User.hasMany(Vacancies);
Vacancies.belongsTo(User);

User.hasOne(UserSkills);
UserSkills.belongsTo(User);

RequirementsCategory.hasOne(Requirements);
Requirements.belongsTo(RequirementsCategory);

VacanciesCategory.hasOne(Vacancies);
Vacancies.belongsTo(VacanciesCategory)

Vacancies.hasMany(Response)
Response.belongsTo(Vacancies)

Vacancies.belongsToMany(Requirements, { through: VacanciesRequirements, as: 'requirements' });
Requirements.belongsToMany(Vacancies, { through: VacanciesRequirements, as: 'vacancies' });

module.exports = {
    User,
    UserSkills,
    Response,
    Requirements,
    RequirementsCategory,
    Vacancies,
    VacanciesRequirements,
    VacanciesCategory
};