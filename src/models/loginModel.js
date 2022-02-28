import { connect } from "../database"

export const findUserByUsername = async(username)=>{
    const dbConnection = await connect();
    const query = "SELECT u.id_user as id_user, username, password, email, r.id_rol, r.name as rol FROM users as u, roles_users as ru, roles as r WHERE u.id_user=ru.id_user and r.id_rol=ru.id_rol and username=?";
    const [response] = await dbConnection.query(query, username);
    return response;
}

export const finUdserById = async(idUser)=>{
    const dbConnection = await connect();
    const query = "SELECT * FROM users WHERE id_user=?";
    const [response] = await dbConnection.query(query, idUser);
    return response;
}

export const findRolByName = async(rolName)=>{
    const dbConnection = await connect();
    const query = "Select * from roles where name=?";
    const [response] = await dbConnection.query(query, rolName);
    return response;
}

export const findRolesUserByIds = async(dataRolUser)=>{
    const dbConnection = await connect();
    const query = "SELECT id_user, id_rol FROM roles_users WHERE id_user=? and id_rol=?";
    const [response] = await dbConnection.query(query, dataRolUser);
    return response;
}

export const createUser = async(dataUser)=>{
    const dbConnection = await connect();
    const query = "INSERT INTO users(username, password, email) VALUES(?,?,?)";
    const [response] = await dbConnection.query(query, dataUser);
    return response;
}

export const createRolesUser = async (dataRolUser)=>{
    const dbConnection = await connect();
    const query = "INSERT INTO roles_users(id_user, id_rol) VALUES(?,?)";
    const [response] = await dbConnection.query(query, dataRolUser);
    return response;
}
