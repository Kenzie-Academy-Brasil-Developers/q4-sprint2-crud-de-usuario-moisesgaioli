import { Router } from "express";
import { createUserController, deleteUserController, getProfileController, getUserController, loginController, updateUserController } from "../controllers";
import { duplicateEmail, findUserByEmail, userIsAdmin, validateShape, verifyToken } from "../middlewares";
import { loginShape, updateUserShape, userShape } from "../shapes";

const routerUser = Router()


routerUser.get("/", verifyToken, userIsAdmin, getUserController )

routerUser.post("/register", validateShape(userShape), duplicateEmail, createUserController)

routerUser.post("/login", validateShape(loginShape), findUserByEmail, loginController)

routerUser.get("/profile", verifyToken, getProfileController)

routerUser.patch("/:id", validateShape(updateUserShape), verifyToken, userIsAdmin, updateUserController)

routerUser.delete("/:id", verifyToken, userIsAdmin, deleteUserController)


export default routerUser