import { Router } from "express";
import { signIn, signUp } from "../controllers/loginController";
import { usersValidator } from "../middlewares";

const loginRoutes = Router();

loginRoutes.post("/signin", usersValidator.validateLoginUser, signIn);
loginRoutes.post("/signup", usersValidator.validateCreateUser, signUp);

export default loginRoutes;