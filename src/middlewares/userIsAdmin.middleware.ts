import { NextFunction, Request, Response } from "express";

const userIsAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { isAdmin } = req.userToken

    if(isAdmin === false) {
       req.isAdmin = isAdmin
       return next()
    } else {
        req.isAdmin = isAdmin
        return next()
    }
}

export default userIsAdmin