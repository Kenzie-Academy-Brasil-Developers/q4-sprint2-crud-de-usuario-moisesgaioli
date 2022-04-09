import "reflect-metadata"
import { createConnection } from "typeorm"
import dbConfig from "./db/ormconfig"
import app from "./app"


createConnection(dbConfig)
    .then(() => {
        const PORT = process.env.PORT
        console.log("Database connected")

        app.listen(PORT, () => console.log(`App runing on port ${PORT}`))
    })
    .catch(error => console.log(error))
    