import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, insertItem, updateItem } from "../controllers/item.controller";
import { checkSession } from "../middlewares/session.middleware";


const router = Router();

router.get('/', checkSession, getItems);
router.get('/:id', getItem);
router.post('/', insertItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export {
    router,
}