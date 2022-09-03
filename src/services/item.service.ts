import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item.model"


const insertItemService = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

const getItemsService = async () => {
    const responseItems = await ItemModel.find({})
    return responseItems;
}

const getItemService = async (id: string) => {
    const responseItem = await ItemModel.findById(id);
    return responseItem;
}

const updateItemService = async (id: string, item: Car) => {
    const responseItem = await ItemModel.findByIdAndUpdate({ _id: id }, item, {
        new: true
    });
    return responseItem;
}

const deleteItemService = async (id: string) => {
    const responseItem = await ItemModel.remove({ _id: id })
    return responseItem;
}

export { insertItemService, getItemsService, getItemService, updateItemService, deleteItemService }