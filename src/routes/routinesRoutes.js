import { Router } from "express";
import { getRoutine } from "../controllers/routinesController";


const routinesRoutes = Router()

routinesRoutes.get("/routines/:idUser", getRoutine)

export default routinesRoutes