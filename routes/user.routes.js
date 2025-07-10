import { Router } from "express";
import { signupSchema } from "../validators/index.js";
import { signinSchema } from "../validators/index.js";
import { User } from "../models/index.js";
import bcrypt from "bcryptjs";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //   console.log(req.body);
  const result = signupSchema.safeParse(req.body);
  console.log(result);
  if (!result.success)
    res
      .status(400)
      .json({ success: false, message: `fill your details correctly` });

  //check for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser)
    res.status(400).json({ success: false, message: `User already exists` });

  //if no exisiting user, create new user
  try {
    await User.create({
      email,
      password,
      firstName,
      lastName,
    });

    res
      .status(201)
      .json({ success: true, message: `user signed up successfully` });
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const result = signinSchema.safeParse(req.body);
  //   console.log(result);
  if (!result.success)
    res.status(400).json({
      success: false,
      message: `fill your details correctly`,
    });
  try {
    const user = await User.findOne({ email });

    const passwordIsMatched = await bcrypt.compare(password, user.password);
    // console.log(passwordIsMatched);

    if (!passwordIsMatched)
      res.status(400).json({
        success: false,
        message: `wrong credentials`,
      });
    res.status(200).json({
      success: true,
      message: `login successful`,
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "purchased course",
  });
});

export default userRouter;
