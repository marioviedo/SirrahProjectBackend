import { Router } from "express";
import { createMuscleController, createTrainigController, getRoutineController } from "../controllers/routinesController";


const routinesRoutes = Router();

routinesRoutes.get("/routines/:idUser", getRoutineController);
routinesRoutes.post("/muscles", createMuscleController);
routinesRoutes.post("/training", createTrainigController);

export default routinesRoutes;