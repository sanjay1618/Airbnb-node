import { dbConfig } from "../../config/index";
import { Sequelize } from "sequelize";


const sequelize = new Sequelize({

    database: dbConfig.DB_NAME,
    username: dbConfig.DB_USERNAME,
    password: dbConfig.DB_PASSWORD,
    host: dbConfig.DB_HOST,
    dialect: "mysql",
    logging : true
}
)
export default sequelize;