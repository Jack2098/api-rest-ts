import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";


const registerStorageService = async (storage: Storage) => {
    const response = await StorageModel.create(storage);
    return response;
}

export { registerStorageService }