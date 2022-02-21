import { Router } from "express";
import { createMuscleGroupController, getMuscleGroupsController } from "../controllers/configurationController";

const configurationRoutes = Router();

configurationRoutes.get("/musclegroups", getMuscleGroupsController);

configurationRoutes.post("/musclegroups", createMuscleGroupController);

export default configurationRoutes;