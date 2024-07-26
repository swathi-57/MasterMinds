const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json({ extended: false }));
mongoose.connect("mongodb://localhost:27017/users")
.then((res)=>console.log('MongoDB connected...'))
.catch((err)=>console.log('mongo db not connected...'))
const studentModel=require('./models/Student');
const teachers=require('./models/Teachers');
const courses=require('./models/Courses');
const contacts=require('./models/Contact');
const comments=require('./models/Comments')
const Student=require('./models/EnrolledStudent')

app.get('/watchvideo',(req,res)=>{
  comments.find()
  .then((comment)=>res.json(comment))
  .catch((err)=>res.json(err))
})

app.post('/signup', async (req, res) => {
    studentModel.create(req.body)
    .then((students)=> res.json(students))
    .catch((err)=>res.json(err))
});
app.post('/register',async(req,res)=>{
  teachers.create(req.body)
  .then((teacher)=> res.json(teacher))
  .catch((err)=>res.json(err))
})

app.post('/contact',async(req,res)=>{
  contacts.create(req.body)
  .then((cont)=> res.json(cont))
  .catch((err)=>res.json(err))
})

app.post('/login', async (req, res) => {
    const {name,email,password}=req.body;
    studentModel.findOne({email:email,})
    .then((user)=>{
      if(user){
        if(user.password===password){
          res.json("Success")
        }
        else{
          res.json("the password is incorrect")
        }
      }
      else{
        res.json("no user exit")
      }
    })
});

app.get('/teachers',(req,res)=>{
  teachers.find()
  .then((teacher)=>res.json(teacher))
  .catch((err)=>res.json(err))
})
app.get('/courses',(req,res)=>{
  courses.find()
  .then((course)=>res.json(course))
  .catch((err)=>res.json(err))
})

app.post('/courses', async (req, res) => {
  Student.create(req.body)
  .then((stud)=> res.json(stud))
  .catch((err)=>res.json(err))
});

app.listen(5000, () => console.log(`Server started on port 5000`));

