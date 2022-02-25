import { Router } from "express";
import { createMuscleGroupController, createTypeRestrictionController, deleteTypeRestrictionController, getMuscleGroupsController } from "../controllers/configurationController";

const configurationRoutes = Router();

configurationRoutes.get("/musclegroups", getMuscleGroupsController);

configurationRoutes.post("/musclegroups", createMuscleGroupController);
configurationRoutes.post("/typeRestrictions", createTypeRestrictionController);

configurationRoutes.delete("/typeRestrictions", deleteTypeRestrictionController);

export default configurationRoutes;