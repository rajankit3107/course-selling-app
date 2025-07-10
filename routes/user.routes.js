import { Router } from "express";
import { userSchema } from "../validators/index.js";
import { User } from "../models/index.js";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //   console.log(req.body);
  const result = userSchema.safeParse(req.body);
  if (!result) res.status(400).json({ message: `fill your details correctly` });

  //check for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) res.status(400).json({ message: `User already exists` });

  //if no exisiting user, create new user
  try {
    await User.create({
      email,
      password,
      firstName,
      lastName,
    });

    res.status(201).json({ message: `user signed up successfully` });
  } catch (error) {
    console.log(error);
  }
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
