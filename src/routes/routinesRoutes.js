import { Router } from "express";
import { createMuscleController, createTrainigController, getRoutineController } from "../controllers/routinesController";
import { authJwt } from "../middlewares";


const routinesRoutes = Router();

routinesRoutes.get("/routines/:idUser", authJwt.verifyToken, getRoutineController);
routinesRoutes.post("/muscles", authJwt.verifyToken, createMuscleController);
routinesRoutes.post("/training", authJwt.verifyToken, createTrainigController);

export default routinesRoutes;