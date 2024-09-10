import { Router } from "express";

import PostController from "../controllers/PostController";

const PostRouter = Router();

//Listar posts
PostRouter.get("/post", PostController.listPost);

//Inserir posts
PostRouter.post("/post", PostController.createPost);

//Atualizar posts
PostRouter.put("/post/:id", PostController.updatePost);

//Deletar posts
PostRouter.delete("/post/:id", PostController.deletePost);

export default PostRouter;