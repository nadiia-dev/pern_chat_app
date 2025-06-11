import express from "express";
import authRouter from "./routes/auth.router.js";
import messagesRouter from "./routes/messages.router.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
