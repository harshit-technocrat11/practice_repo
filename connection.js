
import mongoose from "mongoose";

async function connectMongodb(url) {
    
   console.log("Mongodb connected!!")
   return mongoose.connect(url)

}

export default connectMongodb
