import { Request, Response } from "express"
import { IUser, UserRepository } from "../repositories"



const getUserController = async (req: Request, res: Response) => {
    const newRes = []

    if(!req.isAdmin){
        return res.status(401).json({ message: "Unauthorized" })
    }
    
    const users: IUser[]  = await new UserRepository().findUsers()

    users.forEach(user => {
        const { password, ...userRes } = user
        newRes.push(userRes)
    })
    return res.status(200).json(newRes)
}

export default getUserController