import { Sequelize } from "sequelize";

const db = new Sequelize('react_mysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db
