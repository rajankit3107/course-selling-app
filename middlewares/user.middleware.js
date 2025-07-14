import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function userMiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, process.env.JWT_USER_PASSWORD);

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(403).json({ message: `you are not signed in` });
  }
}

export default userMiddleware;
