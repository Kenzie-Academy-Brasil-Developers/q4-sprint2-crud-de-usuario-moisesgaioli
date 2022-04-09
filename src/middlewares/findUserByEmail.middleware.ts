import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories";


const findUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.validated
    
    try {
        const [user] = await new UserRepository().findByEmail(email)
        
        if(!user) {
            return res.status(401).json({ message: "Wrong email/password" })
        } else {
            req.userByEmail = user
            return next()
        }
    } catch (error) {
        console.log(error)
    }
}

export default findUserByEmail