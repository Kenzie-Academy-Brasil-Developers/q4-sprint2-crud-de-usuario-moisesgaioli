import { Request, Response } from "express"
import { UserRepository } from "../repositories"



const deleteUserController = async (req: Request, res: Response) => {
    const [user] = await new UserRepository().findById(req.params.id)

    if(!user){
        return res.status(404).json({ message: "User not found" })
    }

    if(req.isAdmin === false && req.params.id !== req.userToken.id) {
        return res.status(401).json({ message: "Missing admin permissions" })
    }

    if(req.isAdmin === false && req.params.id === req.userToken.id) {
        await new UserRepository().deleteUser(req.params.id)
        return res.status(200).json({ message: "User deleted with success" })
    }

    if(req.isAdmin) {
        await new UserRepository().deleteUser(req.params.id)
        return res.status(200).json({ message: "User deleted with success" })
    }
}


export default deleteUserController