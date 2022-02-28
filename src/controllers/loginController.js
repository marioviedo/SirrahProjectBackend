import { createRolesUser, createUser, findUserByUsername } from "../models/loginModel";
import bcrypt from "bcryptjs";
import Jwt  from "jsonwebtoken";
import { secrets } from "../config";

export const signIn = async (req, res)=>{
    // iniciar sesion
    const dataUser = [req.body.username, req.body.password];
    const [responseFindUser] = await findUserByUsername(dataUser[0]);
    if(responseFindUser)
    {
        const matchPassword = await comparePassword(dataUser[1], responseFindUser["password"]);
        if(matchPassword)
        {
            const token = Jwt.sign({id:responseFindUser['id_user']},secrets.secret,{
                expiresIn:86400
            });
            res.json({token});
        }else{
            res.status(401).json({
                Error:"Nombre de usuario o contraseña incorrecta"
            });
        }
    }else{
        res.status(401).json({
            Error:"Nombre de usuario o contraseña incorrecta"
        });
    }
}

export const signUp = async(req, res)=>{
    // registrar usuario
    const encryptedPassword = await encryptPassword(req.body.password);
    const dataUser = [req.body.username, encryptedPassword, req.body.email];
    const responseFindUser = await findUserByUsername(dataUser[0]);
    let dataRoles = [];
    if(req.body.roles){
        const {roles} = req.body;
        for(let key in roles)
        {
            if(roles.hasOwnProperty(key))
            {
                dataRoles.push(roles[key]);                
            }
        }
    }else{
        dataRoles.push(3);
    }
    if(responseFindUser.length == 0)
    {
        const responseAfterCreated = await createUser(dataUser);

        dataRoles.forEach(async element => {
            const dataRolUser = [responseAfterCreated['insertId'], element];
            await createRolesUser(dataRolUser);
        });
        
        const token = Jwt.sign({id:responseAfterCreated['insertId']}, secrets.secret, {
            expiresIn:86400
        });
        res.status(201).json({token});    
    }
    else{
        res.json(responseFindUser);
    }
    
}

export const encryptPassword =  async(password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const comparePassword = async(password, recievePassword)=>{
    return await bcrypt.compare(password, recievePassword);
}

