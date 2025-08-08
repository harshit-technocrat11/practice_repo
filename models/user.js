import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  mother_tongue: {
    type: String,
  },
},
{timestamps:true});


//model 
const User =  mongoose.model("user",userSchema);

export default User;



