import { Request, Response } from "express";


const getProfileController = async (req: Request, res: Response) => {
    const { password, ...userRes } = req.userToken

    return res.json(userRes)
}


export default getProfileController