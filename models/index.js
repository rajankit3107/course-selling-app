import mongoose, { ObjectId } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    rquired: true,
  },

  imageUrl: {
    type: String,
    required: false,
  },

  createrId: {
    type: ObjectId,
  },
});

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
  },
  courseId: {
    type: ObjectId,
  },
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);
const Purchase = mongoose.model("Purchase", purchaseSchema);
