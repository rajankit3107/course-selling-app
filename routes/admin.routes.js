import { Router } from "express";
import { Admin, Course } from "../models/index.js";
import { signupSchema } from "../validators/index.js";
import { signinSchema } from "../validators/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import adminMiddleware from "../middlewares/admin.middleware.js";

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //   console.log(req.body);
  const result = signupSchema.safeParse(req.body);
  //   console.log(result);
  if (!result.success) {
    return res
      .status(400)
      .json({ success: false, message: `fill your details correctly` });
  }

  //check for existing user
  const existingUser = await Admin.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, message: `Admin already exists` });
  }

  //if no exisiting user, create new user
  try {
    await Admin.create({
      email,
      password,
      firstName,
      lastName,
    });

    res
      .status(201)
      .json({ success: true, message: `admin signed up successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const result = signinSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: `fill your details correctly`,
    });
  }
  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(403).json({
        success: false,
        message: `Incorrect credentials`,
      });
    }

    const passwordIsMatched = await bcrypt.compare(password, admin.password);
    // console.log(passwordIsMatched);

    if (!passwordIsMatched) {
      return res.status(400).json({
        success: false,
        message: `wrong credentials`,
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_ADMIN_PASSWORD
    );
    //   localStorage.setItem(token);
    res.json({
      success: true,
      message: `login successful`,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  if (!adminId) res.json({ message: `you are not allowed to do that` });

  const { title, description, imageUrl, price } = req.body;

  const course = await Course.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    createrId: adminId,
  });

  res.json({
    message: `course created`,
    courseId: course._id,
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
