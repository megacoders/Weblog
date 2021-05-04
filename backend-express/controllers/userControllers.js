import asyncHandler from "express-async-handler";
import User from "../models/usersModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utiles/generateToken.js";

// @desc Register a new user
// @Route POST /api/users
// @Access Public

const registerUser = asyncHandler(async (req, res) => {
  // getting values from body
  const { name, email, password } = req.body;

  // check if email is already register or not
  const alreadyExists = await User.findOne({ email });

  // throw error if user exists
  if (alreadyExists) {
    res.status(400);
    throw new Error("Already register with this email");
  }

  // create user obj
  const user = new User({
    name,
    email,
    password,
  });

  // check if data is ok or not
  if (user) {
    // save use obj in to db and return json
    const newUser = await user.save();
    res.status(201).json({
      name,
      email,
      password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Bad data");
  }
});

// @Desc Login in user
// @Route POST /api/users/login
// @Access Public

const loginUser = asyncHandler(async (req, res) => {
  // get email and password from body
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // check password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    // doesn't found email or wrong password
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
