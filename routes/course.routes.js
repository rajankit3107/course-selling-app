import { Router } from "express";

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "purchase courses",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "preview courses",
  });
});

export default courseRouter;
