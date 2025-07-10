import { Router } from "express";

const adminRouter = Router();

adminRouter.post("/singup", (req, res) => {
  res.json({
    message: "signed Up",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "singed In",
  });
});

adminRouter.post("/", (req, res) => {
  res.json({
    message: `created course`,
  });
});

adminRouter.put("/", (req, res) => {
  res.json({
    message: `updated course`,
  });
});

adminRouter.get("/bulk", (req, res) => {
  res.json({
    message: `all the course course`,
  });
});

adminRouter.delete("/", (req, res) => {
  res.json({
    message: `deleted course course`,
  });
});

export default adminRouter;
