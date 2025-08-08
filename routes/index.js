import express from "express";

const UserRouter = express.Router();

//import all handlers
import {
    handleCreateUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
} from "../controllers/index.js";



//routes- use them

// path- /
UserRouter.route("/")
  .get(handleGetAllUsers)
  .post(handleCreateUserById);

//path - /:userId

UserRouter.route("/:userId")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);


export default UserRouter;