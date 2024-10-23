
const mongoose = require("mongoose")


const connection = async()=>{
   try {
    const connect =  await mongoose.connect(process.env.URI)
    if (connect) {
      console.log("Connection to database is successful");
      
    }
   } catch (error) {
      console.log(error);

   }
}


module.exports = connection