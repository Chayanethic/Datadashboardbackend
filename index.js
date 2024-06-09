const express = require('express');
const app = express();
require("dotenv").config();

app.use(express.json());
const cors = require('cors');
app.use(cors());

require('./db/connection');
const Users = require('./models/User');



app.post("/", async (req, resp) => {
  let user = new Users(req.body);
  let result = await user.save();
  resp.send(result);
})

app.get("/alluser", async (req, resp) => {
  try {
    const alluser = await Users.find({});
    resp.send({status: "ok",data: alluser})
  }
  catch (error){
console.log(error)
  }
})

//deleteUser
app.post("/deleteUser", async (req, res) => {
 
  const { userid } = req.body;
  try {
   await Users.deleteOne({
      _id: userid
    })
    res.send({status:"ok", data: `deleted ${_id}`})
  }
  catch(error) {
    console.log(error)
  }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log("port run",PORT)
});
