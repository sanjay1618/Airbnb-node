import { dbConfig } from "./index";

const config = {
  development: {
    username: dbConfig.DB_USERNAME,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB_NAME,
    host: dbConfig.DB_HOST,
    dialect: "mysql",
  },
};

export = config;   
