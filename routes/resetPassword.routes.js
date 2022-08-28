const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
// More info about nodemail to reset password:
// https://charangan.medium.com/send-an-email-using-nodemailer-and-gmail-in-node-js-express-js-34523d5e0aa4
// and...
// https://dev.to/siddharth151199/how-to-send-email-in-node-js-with-nodemailer-edb
const nodemailer = require("nodemailer");

const salt = 10;

// RESET PASSWORD👇
router.post("/reset-password", async (req, res, next) => {
  try {
    const { email } = req.body;
    const foundUser = await User.findOne({ email });
    const { username } = foundUser;

    if (!foundUser) {
      res.status(400).json({ errorMessage: "Invalid email addres" });
      return;
    }

    const resetToken = jsonwebtoken.sign(
      { username, _id },
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
      //Create a gmail
      from: `"Pick a Place!" <pick-a-place-app@gmail.com>`,
      to: email,
      subject: "Pick a Place! | Reset password",
      text: `Please click this link to reset your password: http://localhost:${process.env.PORT}/user/reset-password/?token=${resetToken}`,
    });

    console.log(messageToSend);
    res
      .status(200)
      .json({ message: "Plase, check your email to reset your password!" });
  } catch (err) {
    next(err);
  }
});

// UPDATE PASSWORD👇
router.post("/user/reset-password", async (req, res, next) => {
  try {
    const { token } = req.query; // token found in the mail link
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
