import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayLoad {
    sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end()
    }

    const [,token] = authToken.split(" ")

    try{
        const { sub } = verify(token, "981c52cbd9a59d4a245815b700509b8b") as IPayLoad

        req.user_id = sub

        return next()
        
    }catch(err){
        return res.status(401).end()
    }

}