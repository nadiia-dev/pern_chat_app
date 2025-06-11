import express from "express";
import authRouter from "./routes/auth.router.js";
import messagesRouter from "./routes/messages.router.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/messages", messagesRouter);

app.listen(5000, () => {
  console.log("Server listening to port 5000");
});
