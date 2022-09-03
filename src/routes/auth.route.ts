import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.contoller";


const router = Router();

router.post('/register', registerCtrl)
router.post('/login', loginCtrl)

export { router }