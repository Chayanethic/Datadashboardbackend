require("dotenv").config();
const mongoose = require('mongoose');
const dbUrl = process.env.DATABASE;
mongoose.connect(dbUrl).then(() => {
  console.log("Database connected")
})


