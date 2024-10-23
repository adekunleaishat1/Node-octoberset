const express = require("express")

const userrouter = express.Router()
const {getlandingpage, getsignup, usersignup, getlogin} = require("../controllers/userController")

userrouter.get("/", getlandingpage)
userrouter.get('/signup', getsignup)
userrouter.get('/login', getlogin)
userrouter.post("/register", usersignup)

module.exports = userrouter

