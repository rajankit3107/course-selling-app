import { Router } from "express";

const userRouter = Router();

userRouter.post("/singup", (req, res) => {
  res.json({
    message: "signed Up",
  });
});

userRouter.post("/signin", (req, res) => {
  res.json({
    message: "singed In",
  });
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "purchased course",
  });
});

export default userRouter;
