import { Request, Response } from "express"
import { handleHttp } from "../util/error.handle"

const getBlog = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp({ res, error: "ERROR_GET_BLOG" });
    }
}

const getBlogs = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp({ res, error: "ERROR_GET_BLOGS" });
    }
}

const insertBlog = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp({ res, error: "ERROR_INSERT_BLOG" });
    }
}

const deleteBlog = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp({ res, error: "ERROR_DELETE_BLOG" });
    }
}

const updateBlog = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp({ res, error: "ERROR_UPDATE_BLOG" })
    }
}

export {
    getBlog, getBlogs, insertBlog, deleteBlog, updateBlog
}