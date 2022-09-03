import { Response } from "express"
import { RequestExt } from "../interfaces/request.interface"
import { registerStorageService } from "../services/storage.service"
import { handleHttp } from "../util/error.handle"
import { Storage } from "../interfaces/storage.interface";


const regiterStorage = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;

        if (file === undefined) {
            res.status(404).send("FILE_NOT_FOUND");
        } else {
            const dataToRegister: Storage = {
                fileName: `${file?.filename}`,
                path: `${file?.path}`,
                idUser: `${user?.email}`,
            }
            const response = await registerStorageService(dataToRegister)
            res.send(response);
        }
    } catch (e) {
        handleHttp({ res: res, error: "ERROR_REGISTER_STORAGE" })
    }
}

export { regiterStorage }