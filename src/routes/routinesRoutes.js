import { Router } from "express";
import { createMuscleController, createTrainigController, getRoutineController } from "../controllers/routinesController";
import { authJwt } from "../middlewares";


const routinesRoutes = Router();

routinesRoutes.get("/routines", authJwt.verifyTokenUser, getRoutineController);
routinesRoutes.post("/muscles", authJwt.verifyTokenUser, createMuscleController);
routinesRoutes.post("/training", authJwt.verifyTokenUser, createTrainigController);

export default routinesRoutes;