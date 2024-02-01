import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createComment,
  deleteComment,
  editComment,
  getComments,
  getcomments,
  likeComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getComments/:postId", getComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.get("/getcomments", verifyToken, getcomments);
export default router;
