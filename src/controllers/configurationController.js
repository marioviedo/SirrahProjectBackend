import { connect } from "../database";
import { createMuscleGroupModel, createTypeRestrictionModel, getMuscleGroupsModel } from "../models/configurationModel";

/**
 * 
 * Gets -> selects
 * 
 */
export const getMuscleGroups = async (req, res)=>{
	res.json(await getMuscleGroupsModel());
}

/**
 * Posts -> inserts
 */
export const createMuscleGroup = async (req, res)=>{
	const muscleGroupData = [req.body.name];
	res.json(createMuscleGroupModel(muscleGroupData));
}

export const createTypeRestriction = async (req, res)=>{
	const dataTypeRestriction = [req.body.name, req.body.unit];
	res.json(createTypeRestrictionModel(dataTypeRestriction));
}

/**
 * Puts -> updates
 */

/**
 * Deletes -> Deletes
 */