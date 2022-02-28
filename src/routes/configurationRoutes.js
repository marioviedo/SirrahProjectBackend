import { Router } from "express";
import { createMuscleGroupController, createTypeRestrictionController, deleteTypeRestrictionController, getMuscleGroupsController } from "../controllers/configurationController";
import { authJwt } from "../middlewares";

const configurationRoutes = Router();

configurationRoutes.get("/musclegroups", [authJwt.verifyToken, authJwt.isAdmin], getMuscleGroupsController);

configurationRoutes.post("/musclegroups", [authJwt.verifyToken, authJwt.isAdmin], createMuscleGroupController);
configurationRoutes.post("/typeRestrictions", [authJwt.verifyToken, authJwt.isAdmin], createTypeRestrictionController);

configurationRoutes.delete("/typeRestrictions", [authJwt.verifyToken, authJwt.isAdmin], deleteTypeRestrictionController);

export default configurationRoutes;