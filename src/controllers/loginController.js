import { createRolesUser, createUser, findUserByEmail, findUserByUsername, updatePasswordByEmail } from "../models/loginModel";
import bcrypt from "bcryptjs";
import Jwt  from "jsonwebtoken";
import nodemailer from "nodemailer"
import { emailTransportConfig, secrets, webConfig } from "../config";

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
    const responseFindUser = await findUserInBD(dataUser);
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
    if(!responseFindUser)
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
        res.json({message:"Error al registrar: el usuario o el email ya se encuentran registrados"});
    }
}

const findUserInBD = async (dataUser)=>{
    const userByUsername = await findUserByUsername(dataUser[0]); 
    const userByEmail = await findUserByEmail(dataUser[2]);
    const isInBd = (userByUsername.length != 0 || userByEmail.length != 0) ? true : false;
    return isInBd;
}

export const askForChangePassword = async (req, res)=>{
    const dataUser = [req.body.email];
    const responseFindUser = await findUserByEmail(dataUser[0]);
    if(responseFindUser.length == 0)
    {
        res.status(404).json({message:"Correo no encontrado"});
    }else{
        const token = Jwt.sign({email:dataUser[0]}, secrets.secret, {
            expiresIn:86400
        });
        const response = {
            link: webConfig.protocol+ "://" + webConfig.host + webConfig.changePasswordView + "?token=" + token,
            token
        }
        const account = (emailTransportConfig.testAccount) ? await nodemailer.createTestAccount() : {user:emailTransportConfig.authUser, pass:emailTransportConfig.authPass};
        let transporter = nodemailer.createTransport({
            host:emailTransportConfig.host,
            port:emailTransportConfig.port,
            secure:emailTransportConfig.secure,
            auth:{
                user:account.user,
                pass:account.pass
            }
        });
    
        const info = await transporter.sendMail({
            from:'"Fred Foo" <foo@example.com>',
            to:dataUser[0],
            subject:"Hello world",
            text:"Ingresa a este enlace para cambiar tu contraseña: " + response['link'],
            //html:"<br>hello<br>"
        });
        console.log("Correo enviado: ");
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.status(200).json(response);
    }
}

export const changePassword = async (req, res)=>{
    const encryptedPassword = await encryptPassword(req.body.password);
    const dataUser = [encryptedPassword, req.userEmail_to_ChangePassword];
    const responseUpdateUser = await updatePasswordByEmail(dataUser);
    return res.json(responseUpdateUser);
}

export const encryptPassword =  async(password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const comparePassword = async(password, recievePassword)=>{
    return await bcrypt.compare(password, recievePassword);
}

