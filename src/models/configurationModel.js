import { connect } from "../database";

export const getMuscleGroupsModel = async ()=>{
    const dbConnection = await connect();
	const [response] = await dbConnection.query("SELECT * FROM musclegroups");
    return response;
}

export const createMuscleGroupModel = async (dataMuscleGroup)=>{
    const dbConnection = await connect();
	const [response] = await dbConnection.query("INSERT INTO musclegroups(name) VALUES(?)", dataMuscleGroup);
    return response;
}

export const createTypeRestrictionModel = async (dataTypeRestriction)=>{
    const dbConnection = await connect();
    const [response] = await dbConnection.query("INSERT INTO cattyperestrictions(name, unit) VALUES(?, ?)", dataTypeRestriction);
    return response;
}

export const deleteTypeRestrictionModel = async (id_TypeRestriction)=>{
    const dbConnection = await connect();
    const [response] = await dbConnection.query("DELETE FROM cattyperestrictions WHERE id_typeRestriction=?", id_TypeRestriction);
    return response;
}