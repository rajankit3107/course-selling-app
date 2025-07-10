import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/course.routes.js";
import courseRouter from "./routes/course.routes.js";
import adminRouter from "./routes/admin.routes.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running ${port}`);
});
