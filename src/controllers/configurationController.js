import { createMuscleGroupModel, createTypeRestrictionModel, deleteTypeRestrictionModel, getMuscleGroupsModel } from "../models/configurationModel";

/**
 * 
 * Gets -> selects
 * 
 */
export const getMuscleGroupsController = async (req, res)=>{
	res.json(await getMuscleGroupsModel());
}

/**
 * Posts -> inserts
 */
export const createMuscleGroupController = async (req, res)=>{
	const dataMuscleGroup = [req.body.name];
	res.json(createMuscleGroupModel(dataMuscleGroup));
}

export const createTypeRestrictionController = async (req, res)=>{
	const dataTypeRestriction = [req.body.name, req.body.unit];
	res.json(createTypeRestrictionModel(dataTypeRestriction));
}

/**
 * Puts -> updates
 */

/**
 * Deletes -> Deletes
 */
export const deleteTypeRestrictionController = async (req, res)=>{
	const id_typeRestriction = req.params.id_typeRestriction;
	res.json(deleteTypeRestrictionModel(id_typeRestriction));
}
