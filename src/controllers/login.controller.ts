import jsonwebtoken from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Request, Response } from "express";
import { UserRepository } from "../repositories";
import config from "../configs";


const loginController = async (req: Request, res: Response) => {
    const { password } = req.validated
    
    try {
        const match = await bcrypt.compare(password, req.userByEmail.password)

        const token = jsonwebtoken.sign({ id: req.userByEmail.id }, config.secret_key, { expiresIn: config.expiresIn })

        if(match){
            return res.status(200).json({ token: token })
        } else {
            return res.status(400).json({ message: "Wrong email/password" })
        }

    } catch (error) {
        console.log(error)
    }
   
    
    
}

export default loginController




