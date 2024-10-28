const todomodel = require("../Models/todomodel")


const getTodo = async(req, res) =>{
    try {
        const  todolist = await todomodel.find()
        console.log(todolist);
        
         res.render("todo",{todolist})
    } catch (error) {
        console.log(error);
        
    }

}


const postTodo = async(req, res) =>{
 try {
   const savetodo = await todomodel.create(req.body)
   console.log(savetodo);
   if (savetodo) {
    res.redirect("/todo/todo")
    console.log("todo saved successfully");
   }else{
    console.log("error occured");
   }
 } catch (error) {
    console.log(error);
    
 }
}

const deleteTodo = async(req, res)=>{
    try {
        const {id} = req.params
      const deletedtodo =  await todomodel.findOneAndDelete({_id:id})
      if (deletedtodo) {
        console.log(deletedtodo);
        res.redirect("/todo/todo")
      }else{
        console.log("an error occured");
        
      }
        
    } catch (error) {
        console.log(error.message);
        
    }
}

const getEdit = async(req, res) =>{
    const {id} = req.params
 const onetodo =  await todomodel.findOne({_id:id})
 console.log(onetodo);
 
   res.render("edit",{onetodo})
}

const updateTodo = async (req, res) =>{
   try {
    const {id} = req.params
    console.log(req.body);
   const edittodo =   await todomodel.findOneAndUpdate(
        {_id:id},
        {title:req.body.title, content:req.body.content},
        {new: true}
    )
    if (edittodo) {
        res.redirect("/todo/todo")
    }
   } catch (error) {
    console.log(error);
    
   }

}

module.exports = {getTodo, postTodo, deleteTodo, getEdit, updateTodo}