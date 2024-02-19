const { Router } = require("express");
const userRouter = Router();

const { signupUser, getAllUsers } = require("./controllers");

userRouter.post("/users/signupUser", signupUser);
userRouter.get("/users/getAllUsers", getAllUsers);

module.exports = userRouter;
