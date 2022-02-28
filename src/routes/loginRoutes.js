import { Router } from "express";
import { signIn, signUp } from "../controllers/loginController";

const loginRoutes = Router();

loginRoutes.post("/signin", signIn);
loginRoutes.post("/signup", signUp);

export default loginRoutes;