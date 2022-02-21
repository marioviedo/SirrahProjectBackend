import { connect } from "../database";

export const getMuscleGroupsModel = async ()=>{
    const dbConnection = await connect();
	const [response] = await dbConnection.query("SELECT * FROM musclegroups");
    return response;
}

export const createMuscleGroupModel = async (dataArray)=>{
    const dbConnection = await connect();
	const [response] = await dbConnection.query("INSERT INTO musclegroups(name) VALUES(?)", arrayData);
    return response;
}

export const createTypeRestrictionModel = async (typeRestrictionData)=>{
    const dbConnection = await connect();
    const [response] = await dbConnection.query("INSERT INTO cattyperestrictions(name, unit) VALUES(?, ?)", typeRestrictionData);
    return response;
}