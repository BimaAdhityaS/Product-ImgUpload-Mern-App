import { Sequelize } from "sequelize";

const db = new Sequelize('mern-assetstore', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;