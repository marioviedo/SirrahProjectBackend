import { Router } from "express";
import { createMuscle, getRoutine } from "../controllers/routinesController";


const routinesRoutes = Router();

routinesRoutes.get("/routines/:idUser", getRoutine);
routinesRoutes.post("/muscles", createMuscle);

export default routinesRoutes;