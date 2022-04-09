import { Request, Response } from "express";
import { IUser, UserRepository } from "../repositories";


const createUserController = async (req: Request, res: Response) => {
    const user: IUser = await new UserRepository().saveUser(req.validated)
    
    const { password, ...newUser} = user
    
    return res.status(200).json(newUser)
}

export default createUserController