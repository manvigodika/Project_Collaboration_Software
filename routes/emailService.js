const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { requireAuth } = require("../middleware/authMiddleware");

const Transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "rndmgbrish@outlook.com",
    pass: "CDC@2022**",
  },
});

router.post("/mail/:email", requireAuth, async (req, res) => {
  console.log("HERE");
  const mailOptions = {
    from: "rndmgbrish@outlook.com",
    to: req.params.email,
    subject: req.body.mailSubject,
    html: req.body.mailBody,
  };

  try {
    await Transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Sent: ", info.response);
      res.json({
        status: "sent",
      });
    });
  } catch (error) {
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
});

module.exports = router;
