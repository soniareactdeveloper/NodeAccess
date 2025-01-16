const express = require("express");
const app = express();
const router = express.Router({
  caseSensitive: true,
})

app.use(express.json());
app.use(router);


router.get('/', (req,res)=>{
  res.status(200).send("hello world")
})




app.listen(8000, ()=>{
  console.log("server is running")
})