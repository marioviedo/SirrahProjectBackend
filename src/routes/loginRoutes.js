import { Router } from "express";
import { askForChangePassword, changePassword, signIn, signUp } from "../controllers/loginController";
import { authJwt, usersValidator } from "../middlewares";

const loginRoutes = Router();

loginRoutes.post("/signin", usersValidator.validateLoginUser, signIn);
loginRoutes.post("/signup", usersValidator.validateCreateUser, signUp);
loginRoutes.post("/askChangePassword", [usersValidator.validateAskForChangePassword], askForChangePassword);
loginRoutes.post("/changePassword", [authJwt.verifyTokenChangePassword, usersValidator.validateChangePassword], changePassword);

export default loginRoutes;