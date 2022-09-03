import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/request.interface";
import { handleHttp } from "../util/error.handle";
import { verifyToken } from "../util/jwt.handle";

const checkSession = (req: RequestExt, res: Response, next: NextFunction) =>{
    try {
        
        const jwtByUser = req.headers.authorization || ' ';
        const jwt = jwtByUser.split(' ').pop();

        const isUser = verifyToken(`${jwt}`) as { email: string };
        
        if(!isUser) {
            res.status(403);
            res.send("NOT_HAVE_A_TOKEN_VALID");
        } else {
            req.user = isUser;
            next()
        }
    } catch (error) {
        // handleHttp({ res: res, error: "SESSION_NO_VALIDAD", stat: 400 }) => {
        res.status(400);
        res.send("SESSION_NO_VALIDAD");
    }
}

export { checkSession }