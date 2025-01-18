const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Middleware
app.use(cors({
  origin: 'http://localhost:5173'  
}));
app.use(express.json());  


//user schema

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true , unique: true},
  password: { type: String, required: true },
});

const regInfo = mongoose.model('RegUserData', userSchema);


// Registration Route
app.post('/registration', async (req, res) => {
   const {username, email, password} = req.body; 

   if(!username || !email || !password){
     return res.status(400).json({ message: 'Please fill all fields' });
   }

  const newUser = new regInfo(
    {username: username, 
      email: email,
      password: password}
  );
  newUser.save()
  

  res.send({ message: 'User registered successfully!' });
});


// Login Route

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email ||!password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const user = await regInfo.findOne({ email: email });

  if (!user ||!(user.password === password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'User authenticated successfully!' });
});

// delete account 

app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Please provide an id' });
  }

  const user = await regInfo.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ message: 'User deleted successfully!' });
});


// Connect to MongoDB
mongoose.connect('mongodb+srv://nodewithdb:ROvUpj2MnGEVNjOV@cluster0.68lfj.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Db Connected!'));
// Server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
