const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../models/User.model");
const nodemailer = require("nodemailer");
// const smtpTransport = require("nodemailer-smtp-transport");
require("dotenv").config();

const salt = 10;

// RESET PASSWORD👇
router.post("/forgot-password", async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email });
    const { username } = foundUser;

    if (!foundUser) {
      res.status(400).json({ errorMessage: "Invalid email addres" });
      return;
    }

    const resetToken = jsonwebtoken.sign(
      { username },
      process.env.TOKEN_SECRET,
      {
        algorithm: "HS256",
        expiresIn: "5m",
      }
    );

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const messageToSend = await transporter.sendMail({
      from: `"Pick a Place!" <pick.a.place.api@gmail.com>`,
      to: req.body.email,
      subject: "Pick a Place! | Reset password",
      text: `Please click this link to reset your password: http://localhost:${process.env.PORT}/user/forgot-password/?token=${resetToken}`,
    });

    console.log(messageToSend);
    res.status(200).json({
      message:
        "Please, check your email to reset your password! ( check your spam :) )",
    });
  } catch (err) {
    next(err);
  }
});

// UPDATE PASSWORD👇
router.post("/user/reset-password", isAuthenticated, async (req, res, next) => {
  try {
    const { token } = req.query; // token from the email link
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username });

    if (!foundUser) {
      res.status(400).json({ message: `${username} doesn't exist` });
      return;
    }
    const decodedJwt = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);

    if (token) {
      const generatedSalt = bcrypt.genSaltSync(salt);
      const hashedPassword = bcrypt.hashSync(password, generatedSalt);

      await User.findOneAndUpdate(
        { username: decodedJwt.username },
        { password: hashedPassword }
      );
    }
    res.status(200).json({
      message: "You've successfully updated your password!",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
