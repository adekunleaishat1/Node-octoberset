const express = require("express")
const app = express()
const ejs = require("ejs")

//middlewares
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))


let userarray = []
let name ;
let todolist =[]

app.get("/",(request, response)=>{
   // response.send("welcome to node class")
   response.render("index",{name:"Tola"})
})
app.get('/signup',(req, res)=>{
   res.render("signup")
})
app.get('/login',(req, res)=>{
   res.render("login",{name})
})
app.get("/todo", (req, res)=>{
   res.render("todo", {todolist})
});

app.post("/register",(req,res)=>{
  console.log(req.body);
  const {firstname} = req.body
  name = firstname
  userarray.push(req.body)
  console.log(userarray);
  res.redirect("/login")
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


const port = 5005

app.listen(port,()=>{
   console.log(`App started on port ${port}`);
   
})

