import { Router } from "express";
import { createMuscleGroupController, createTypeRestrictionController, deleteTypeRestrictionController, getMuscleGroupsController } from "../controllers/configurationController";
import { authJwt } from "../middlewares";

const configurationRoutes = Router();

configurationRoutes.get("/musclegroups", [authJwt.verifyTokenUser, authJwt.isAdmin], getMuscleGroupsController);

configurationRoutes.post("/musclegroups", [authJwt.verifyTokenUser, authJwt.isAdmin], createMuscleGroupController);
configurationRoutes.post("/typeRestrictions", [authJwt.verifyTokenUser, authJwt.isAdmin], createTypeRestrictionController);

configurationRoutes.delete("/typeRestrictions", [authJwt.verifyTokenUser, authJwt.isAdmin], deleteTypeRestrictionController);

export default configurationRoutes;