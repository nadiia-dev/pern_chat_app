import express from "express";
import authRouter from "./routes/auth.router.js";
import messagesRouter from "./routes/messages.router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/api/auth", authRouter);
app.use("/api/messages", messagesRouter);

app.listen(5000, () => {
  console.log("Server listening to port 5000");
});
