const express = require("express")
const todoroute = express.Router()
const {getTodo, postTodo, deleteTodo, getEdit, updateTodo} = require("../controllers/todoController")




todoroute.get('/todo', getTodo)
todoroute.post('/addtodo', postTodo)
todoroute.post('/delete/:id', deleteTodo)
todoroute.get('/edit/:id', getEdit)
todoroute.post('/update/:id', updateTodo)

module.exports = todoroute   