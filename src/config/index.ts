// This file contains all the basic configuration logic for the app server to work
import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number
}

type DBConfig = {
    DB_NAME : string,
    DB_USERNAME : string,
    DB_PASSWORD : string,
    DB_HOST : string
}

function loadEnv() {
    dotenv.config();
    console.log(`Environment variables loaded`);
}

loadEnv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
};

export const dbConfig : DBConfig = {
    DB_HOST : process.env.DB_HOST || "localhost",
    DB_NAME : process.env.DB_NAME || "airbnb_dev",
    DB_USERNAME : process.env.DB_USERNAME || "root",
    DB_PASSWORD : process.env.DB_PASSWORD || "password"
}