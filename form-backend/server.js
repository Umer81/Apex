const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors({ origin: '*' })); // Allow all origins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER, // Your email address
    pass: process.env.PASS, // Your email password or app-specific password
  },
});

// Route to handle contact form submissions
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.USER, // Your email address
    to: process.env.USER, // Recipient email address (you could also set this to your email)
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: "Error sending email", error });
    }
    res.status(200).send({ message: "Email sent successfully", info });
  });
});

app.get("/" ,(req,res)=>{

  res.send("hello");



})
// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
