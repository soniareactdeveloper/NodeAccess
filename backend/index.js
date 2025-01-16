const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const router = express.Router({
  caseSensitive: true,
})
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

app.use(express.json());
app.use(router);

const logInfo = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
})

const logIn = mongoose.model('login', logInfo);

router.get('/', (req,res)=>{
  res.render("home")
})



router.post('/login', (req,res)=>{
  const {email, password} = req.body;

  let logUser = new logIn({
    email, password
  })

  logUser.save();
  res.send("save data sucessfully");

})


mongoose.connect('mongodb+srv://nodewithdb:ROvUpj2MnGEVNjOV@cluster0.68lfj.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('DB Connected!'));


app.listen(8000, ()=>{
  console.log("server is running")
})