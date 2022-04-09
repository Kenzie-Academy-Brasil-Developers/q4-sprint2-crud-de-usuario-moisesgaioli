import { Request, Response } from "express";
import { UserRepository } from "../repositories";


const updateUserController = async (req: Request, res: Response) => {
    const [user] = await new UserRepository().findById(req.params.id)

    if(!user){
        return res.status(404).json({ message: "User not found" })
    }
    
    if(req.isAdmin === false && req.params.id !== req.userToken.id) {
        return res.status(401).json({ message: "Missing admin permissions" })
    }

    if(req.isAdmin === false && req.params.id === req.userToken.id) {
        const [findUser] = await new UserRepository().findById(req.params.id)
        await new UserRepository().updateUser(findUser, req.validated)
        const [userUpdated] = await new UserRepository().findById(req.params.id)
        const { password, ...newUser} = userUpdated
        return res.status(200).json(newUser)
    }

    if(req.isAdmin) {
        const [findUser] = await new UserRepository().findById(req.params.id)
        await new UserRepository().updateUser(findUser, req.validated)
        const [userUpdated] = await new UserRepository().findById(req.params.id)
        const { password, ...newUser} = userUpdated
        return res.status(200).json(newUser)
    }
}

export default updateUserController