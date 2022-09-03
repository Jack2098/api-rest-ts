import { Request, Response } from "express";
import { loginUserService, registerUserService } from "../services/auth.service";
import { handleHttp } from "../util/error.handle";

const registerCtrl = async ({ body }: Request, res: Response) => {
    try {
        const response = await registerUserService(body)
        res.send({ response });
    } catch (error) {
        handleHttp({ res, error: "ERROR_REGISTER_USER", errorRaw: error });
    }
}

const loginCtrl = async ({ body }: Request, res: Response) => {
    try {

        const response = await loginUserService(body);

        if (response ===  "PASSWORD_INCORRECT") {
            res.status(403);
            res.send({ response });
        } else {
            res.send({ response });
        }
    } catch (error) {
        handleHttp({ res, error: "ERROR_LOGIN_USER", errorRaw: error });
    }
}

export { registerCtrl, loginCtrl };