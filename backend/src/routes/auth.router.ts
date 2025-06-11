import express from "express";
import { login, logout, me, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/me", me);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
