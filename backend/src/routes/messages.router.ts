import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  sendMessage,
  getMessages,
  getConversations,
} from "../controllers/messages.controller";

const router = express.Router();

router.get("/conversations", authMiddleware, getConversations);
router.post("/send/:id", authMiddleware, sendMessage);
router.get("/:id", authMiddleware, getMessages);

export default router;
