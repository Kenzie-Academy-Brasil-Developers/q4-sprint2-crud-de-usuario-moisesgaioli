import dotenv from "dotenv"
import path from "path"
import { ConnectionOptions } from "typeorm"


dotenv.config()

const dbConfig = {
   "type": "postgres",
   "host": "localhost",
   "utl": process.env.DATABASE_URL,
   "port": 5432,
   "username": "postgres",
   "password": process.env.POSTGRES_PASSWORD,
   "database": process.env.POSTGRES_DB,
   // "synchronize": true,
   "logging": false,
   "entities": [
      path.join(__dirname, "../entities/**/*.*")
   ],
   "migrations": [
      path.join(__dirname, "../migrations/**/*.*") 
   ],
   "cli": {
      "entitiesDir": path.join(__dirname, "../entities"),
      "migrationsDir": path.join(__dirname, "../migrations")
   }
} as ConnectionOptions;

export default dbConfig