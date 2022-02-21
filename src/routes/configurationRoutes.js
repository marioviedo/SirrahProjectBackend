import { Router } from "express";
import { createMuscleGroup, getMuscleGroups } from "../controllers/configurationController";

const configurationRoutes = Router();

configurationRoutes.get("/musclegroups", getMuscleGroups);

configurationRoutes.post("/musclegroups", createMuscleGroup);

export default configurationRoutes;