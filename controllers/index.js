

import User from "../models/user.js";

// get:
async function handleGetAllUsers(req, res) {
  const all_db_users =  await User.find({});

  return res.json(all_db_users);
}

//get: userid

async function handleGetUserById(req, res) {
  const user = await User.find({_id:req.params.userId});

  if (!user) {
    return res.status(404).json({ msg: "User not found!" });
  }

  res.json(user);
}

//post : userid

async function handleCreateUserById(req, res) {
  const body = await req.body;

  if (!body || !body.first_name || !body.gender || !body.mother_tongue) {
    return res.status(400).json({ msg: "all fields are mandatory to fill" });
  }

  const result = await User.create({
    first_name: body.first_name,
    gender: body.gender,
    mother_tongue: body.mother_tongue,
  });

  console.log("result: ", result);

  res.status(201).json({ msg: "created successfully" });
}

//patch
async function handleUpdateUserById(req, res) {

    try{
        await User.findByIdAndUpdate(req.params.userId, req.body );

        res.status(200).json({msg: "updated successfully!"})
    }

    catch(err) {
      console.error("Failed to update user with  id",err);
      res.status(500).json({ msg: "failed to update user" }); //internal server
    }

}
//delete
async function handleDeleteUserById(req, res) {

    try {
        await User.deleteOne({_id: req.params.userId})
        res.status(200).json({msg: "deleted successfully"})

    }
    catch (err) {
        console.error("could not find user with this id",err)
        res.status(500).json({msg: "failed to delete user"}) //internal server
    }

}

export  {
  handleGetUserById,

  handleUpdateUserById,
  handleDeleteUserById,
  handleGetAllUsers,
  handleCreateUserById,
};
