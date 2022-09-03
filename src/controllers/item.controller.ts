import { Request, Response } from "express"
import { RequestExt } from "../interfaces/request.interface";
import { deleteItemService, getItemService, getItemsService, insertItemService, updateItemService } from "../services/item.service";
import { handleHttp } from "../util/error.handle"

const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getItemService(id);
        res.send({ response });
    } catch (error) {
        handleHttp({ res, error: "ERROR_GET_ITEM" });
    }
}

const getItems = async (req: RequestExt, res: Response) => {

    try {
        const response = await getItemsService()

        res.send({ response: {data: response, user: req.user } })
    } catch (error) {
        handleHttp({ res, error: "ERROR_GET_ITEMS", errorRaw: error });
    }
}

const insertItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertItemService(body);
        res.send({ response })
    } catch (error) {
        handleHttp({ res, error: "ERROR_INSERT_ITEM", errorRaw: error });
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteItemService(id);
        res.send({ response });
    } catch (error) {
        handleHttp({ res, error: "ERROR_DELETE_ITEM" });
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateItemService(id, body);
        res.send({ response })
    } catch (error) {
        handleHttp({ res, error: "ERROR_UPDATE_ITEM" })
    }
}

export {
    getItem, getItems, insertItem, deleteItem, updateItem
}