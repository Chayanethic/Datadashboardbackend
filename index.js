const express = require('express');
const app = express();

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
    Users.deleteOne({
      _id: userid
    }).then(
    res.send({status:"ok", data: "deleted"}))
  }
  catch(error) {
    console.log(error)
  }
})
const Port = 4000;
app.listen(Port, () => {
  console.log("port run",Port)
});
