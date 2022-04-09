import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories";


const duplicateEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.validated

    try {
        const [user] = await new UserRepository().findByEmail(email)
        
        if(user)  {
            return res.status(400).json({ message: "E-mail already registered" })
        }

        return next()
        
    } catch (error) {
        console.log(error)
    }
}

export default duplicateEmail