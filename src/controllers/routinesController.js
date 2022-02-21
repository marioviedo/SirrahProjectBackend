import { createMuscleModel, createRestrictionModel, getRoutineModel } from "../models/routinesModel";


/**
 * 
 * Gets -> selects
 * 
 */
export const getRoutineController = async (req, res) =>{
	const id_user = [req.params.idUser];
	res.json(await getRoutineModel(id_user));
}

/**
 * Posts -> inserts
 */
export const createMuscleController = async (req, res) =>{
	const dataRestriction = [
		req.body.restrictions.id_typeRestriction,
		req.body.restrictions.id_user,
		req.body.restrictions.value,
		req.body.restrictions.operator
	];
	const responseRestriction = await createRestrictionModel(dataRestriction);
	const dataMuscle = [
		req.body.muscle.id_muscleGroup,
		responseRestriction.insertId, // id_restriction
		req.body.muscle.name
	];
	const responseMuscle = await createMuscleModel(dataMuscle);
	res.json(responseMuscle);
}

export const createTrainigController = async (req, res) =>{
	const data = [req.body];
}

/**
 * Puts -> updates
 */

/**
 * Deletes -> Deletes
 */
