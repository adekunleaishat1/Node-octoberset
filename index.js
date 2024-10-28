const express = require("express")
const app = express()
const ejs = require("ejs")
const mongoose = require("mongoose")
const usermodel = require("./Models/usermodel")
const dbconnection = require("./Db.config/dbconect")
const userrouter = require("./Routes/userRoute")
const todorouter = require("./Routes/todoRoute")
require("dotenv").config()


//middlewares
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use("/", userrouter)
app.use("/todo", todorouter)


// CRUD 



let userarray = []
let name ;

let todolist =[]

// app.get("/",(request, response)=>{
//    // response.send("welcome to node class")
//    response.render("index",{name:"Tola"})
// })



// app.post("/register", async(req,res)=>{
//   try {
//    console.log(req.body);
//  const user = await usermodel.create(req.body)
//  console.log(user);
//   res.redirect("/login")
   
//   } catch (error) {
//    console.log(error);
//    errormessage = error.message
   
//    res.redirect("/signup")
//    // res.status(500).send({message:error.message})
   
//   }
// })

app.post('/login', async(req, res)=>{
   try {
      console.log(req.body);
      const {email, password} = req.body
     const existemail =  await  usermodel.findOne({email:email})
     console.log(existemail);
     if (!existemail) {
      console.log("Not a registered user");
     }else if (existemail.password !== password) {
      console.log("incorrect password ");
      
     } else {
        console.log("login successful");
        
     } 
   } catch (error) {
      console.log(error.message);
      
   }
})



app.post("/todo", (req, res)=>{
   console.log(req.body)
   todolist.push(req.body)
   console.log(todolist);   
   res.redirect('/todo')
})

app.post("/todo/delete/:index", (req, res) => {
   //  console.log(req.body);
    console.log(req.params);
    const {index} = req.params
    
   //  const todoIndex = req.body.index
    todolist.pop(index)
    res.redirect('/todo')
})

app.get("/todo/edit/:index",(req,res)=>{
   console.log(req.params);
   const {index} = req.params
     const onetodo = todolist[index]
   res.render('edit',{index, onetodo})
})

app.post('/todo/update/:index', (req,res)=>{
  console.log(req.body);
  const {index} = req.params
  todolist[index] = req.body
  console.log(todolist);
  res.redirect("/todo")
  
})



dbconnection()

const port = 5005

app.listen(port,()=>{
   console.log(`App started on port ${port}`);
   
})

