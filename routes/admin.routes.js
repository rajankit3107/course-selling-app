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

adminRouter.post("/course", (req, res) => {
  res.json({
    message: `created course`,
  });
});

adminRouter.put("/course", (req, res) => {
  res.json({
    message: `updated course`,
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: `all the course course`,
  });
});

adminRouter.delete("/course", (req, res) => {
  res.json({
    message: `deleted course course`,
  });
});

export default adminRouter;
