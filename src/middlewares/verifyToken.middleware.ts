import jsonwebtoken from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";
import config from "../configs";
import { UserRepository } from "../repositories";


const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization?.split(" ")[1]
    
    if(!header) {
        return res.status(401).json({ message: "Missing authorization headers" })
    }

    jsonwebtoken.verify(header, config.secret_key, async (err: any, decode: string | any) => {
        const [userToken] = await new UserRepository().findById(decode.id)
        
        if(userToken){
            req.userToken = userToken
            return next()
        }

        if(err){
            return res.status(401).json({ message: "Missing authorization headers" })
        }
    })

    
}

export default verifyToken