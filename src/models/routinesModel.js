import { connect } from "../database";

export const getRoutineModel = async (id_user) =>{
    const dbConnection = await connect();
    const query = 'select mg.name as "muscleGroup", m.name as "muscle", t.name as "training_name", s.repetition as "reps", s.weight, s.series, rou.day, rou.break_time '+ 
	'from users as u, restrictions as res, muscles as m, musclegroups as mg, training as t, sets as s, routines as rou '+ 
	'where u.id_user=res.id_user and '+
	'res.id_restriction=m.id_restriction and '+
	'mg.id_musclegroup=m.id_musclegroup and '+
	'm.id_muscle=t.id_muscle and '+
	't.id_training=s.id_training and '+
	's.id_set=rou.id_set and '+
	'u.id_user=?';
    const [response] = await dbConnection.query(query, id_user);
    return response;
}

export const createRestrictionModel = async(dataRestriction)=>{
	const dbConnection = await connect();
	const query = "INSERT INTO restrictions(id_typeRestriction, id_user, value, operator) VALUES(?, ?, ?, ?)";
	const [response] = await dbConnection.query(query, dataRestriction);
	return response;
}

export const createMuscleModel = async(dataMuscle)=>{
	const dbConnection = await connect();
	const query = "INSERT INTO muscles(id_muscleGroup, id_restriction, name) VALUES(?, ?, ?)";
	const [response] = await dbConnection.query(query, dataMuscle);
	return response;
}

export const createTrainingModel = async(dataTraining)=>{
	const dbConnection = await connect();
	const query = "INSERT INTO training(id_muscle, name) VALUES(?, ?)";
	const [response] = await dbConnection.query(query, dataTraining);
	return response;
}