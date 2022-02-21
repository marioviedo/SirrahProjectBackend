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