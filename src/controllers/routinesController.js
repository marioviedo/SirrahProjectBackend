import { createMuscleModel, createRestrictionMdel, getRoutineModel } from "../models/routinesModel";


/**
 * 
 * Gets -> selects
 * 
 */
export const getRoutine = async (req, res) =>{
	const id_user = [req.params.idUser];
	res.json(await getRoutineModel(id_user));
}

/**
 * Posts -> inserts
 */
export const createMuscle = async (req, res) =>{
	const dataRestriction = [
		req.body.restrictions.id_typeRestriction,
		req.body.restrictions.id_user,
		req.body.restrictions.value,
		req.body.restrictions.operator
	];
	const responseRestriction = await createRestrictionMdel(dataRestriction);
	const dataMuscle = [
		req.body.muscle.id_muscleGroup,
		responseRestriction.insertId, // id_restriction
		req.body.muscle.name
	];
	const responseMuscle = await createMuscleModel(dataMuscle);
	res.json(responseMuscle);
}

export const createTrainig = async (req, res) =>{
	const data = [req.body];
}

/**
 * Puts -> updates
 */

/**
 * Deletes -> Deletes
 */
