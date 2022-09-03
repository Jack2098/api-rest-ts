import { Router } from "express";
import { regiterStorage } from "../controllers/storage.controller";
import multerMiddleware from "../middlewares/file.middleware";
import { checkSession } from "../middlewares/session.middleware";


const router = Router()

router.get('/', checkSession, multerMiddleware.single('myfile'), regiterStorage)

export { router }