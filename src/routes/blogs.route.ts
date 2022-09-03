import { Router } from "express";
import { deleteBlog, getBlog, getBlogs, insertBlog, updateBlog } from "../controllers/blog.controller";


const router = Router()

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', insertBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export {
    router,
}