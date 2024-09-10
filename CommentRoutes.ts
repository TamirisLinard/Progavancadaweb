import { Router } from "express";

import CommentController from "../controllers/CommentController";

const CommentRouter = Router();

// Listar comentários
CommentRouter.get("/comment", CommentController.listComment);

// Criar comentários
CommentRouter.post("/comment", CommentController.createComment);

// Editar comentários
CommentRouter.put("/comment", CommentController.updateComment);

// Deletar comentários
CommentRouter.delete("/comment", CommentController.deleteComment);

export default CommentRouter;