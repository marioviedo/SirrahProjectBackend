import { Router } from "express";
import { createMuscleController, getRoutineController } from "../controllers/routinesController";


const routinesRoutes = Router();

routinesRoutes.get("/routines/:idUser", getRoutineController);
routinesRoutes.post("/muscles", createMuscleController);

export default routinesRoutes;