import { connect } from "../database"

/**
 * 
 * Gets -> selects
 * 
 */
export const getMuscleGroups = async (req, res)=>{
    const dbConnection = await connect()
    const [response] = await dbConnection.query("SELECT * FROM musclegroups")
    res.json(response)
}

/**
 * Posts -> inserts
 */
export const createMuscleGroup = async (req, res)=>{
    const arrayData = [req.body.name]
    const dbConnection = await connect()
    const [response] = await dbConnection.query("INSERT INTO musclegroups(name) VALUES(?)", arrayData)
    res.json(response)
}

/**
 * Puts -> updates
 */

/**
 * Deletes -> Deletes
 */