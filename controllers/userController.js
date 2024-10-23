const usermodel = require("../Models/usermodel")
let errormessage;


const getlandingpage = (request, response) =>{
    response.render("index",{name:"Tola"})
} 

const getsignup = (req, res) =>{
    res.render("signup", {errormessage})
}
const getlogin = (req, res) =>{
    res.render("login")
}

const usersignup = async(req, res)=>{
    try {
        console.log(req.body);
      const user = await usermodel.create(req.body)
      console.log(user);
       res.redirect("/login")
        
       } catch (error) {
        console.log(error);
        errormessage = error.message
        
        res.redirect("/signup")
        // res.status(500).send({message:error.message})
        
    }
} 



module.exports = {getlandingpage, getsignup, usersignup, getlogin}
