import express from "express";
import routerUser from "./routes";

const app = express()

app.use(express.json())
app.use("/users", routerUser)

export default app