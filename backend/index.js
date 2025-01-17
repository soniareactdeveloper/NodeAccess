const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const router = express.Router({
  caseSensitive: true,
})
const cors = require("cors");

app.use(express.json());
app.use(router);
app.use(cors());

const RegInfo = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username : {
    type: String,
    required: true,
    unique: true,
  }
})

const RegUser = mongoose.model('registration', RegInfo);

router.get('/', (req,res)=>{
  res.status(200).send("hello")
})


router.post('/registration', (req,res)=>{
  const {email, password, username} = req.body;

  if(!email || !password || !username){
    return res.status(400).send("email,password and username required!")
  }
  
  // data sent to the database 
  let user = new RegUser ({
    email, password , username
  })
  user.save();
  res.status(200).send("data sent")
})




mongoose.connect('mongodb+srv://nodewithdb:ROvUpj2MnGEVNjOV@cluster0.68lfj.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('DB Connected!'));


app.listen(8000, ()=>{
  console.log("server is running")
})