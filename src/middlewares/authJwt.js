import Jwt  from "jsonwebtoken";
import { roles, secrets } from "../config";
import { findRolByName, findRolesUserByIds, finUdserById } from "../models/loginModel";

export const verifyToken = async (req, res, next)=>{
    const token = req.headers["x-access-token"];

    if(!token){
        return res.status(403).json({message:"No token provided"});
    }else{
        try {
            const decoded = Jwt.verify(token, secrets.secret);
            req.id_user = decoded['id'];            
            const userResponse = await finUdserById(req.id_user);
            if(!userResponse){
                return res.status(404).json({message:"Not user found"});
            }else{
                next();
            }
        } catch (error) {
            return res.status(401).json({message:"Unauthorized"});
        }
        
    }
}

export const isAdmin = async(req, res, next)=>{
    const [data_rol] = await findRolByName(roles.admin);
    const [dataRolUser] = await findRolesUserByIds([req.id_user, data_rol['id_rol']]);
    if(dataRolUser)
    {
        next();
    }else{
        return res.status(401).json({message:"Unauthorized"});
    }
}

export const isUser = async(req, res, next)=>{
    const [data_rol] = await findRolByName(roles.user);
    const [dataRolUser] = await findRolesUserByIds([req.id_user, data_rol['id_rol']]);
    if(dataRolUser)
    {
        next();
    }else{
        return res.status(401).json({message:"Unauthorized"});
    }
}