import express from "express";
import { login, logout, me, signup } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/me", authMiddleware, me);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
