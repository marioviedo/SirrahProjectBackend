export const configDB = {
    host:'',
    user:'',
    password:'',
    database:''
}

export const secrets = {
	secret:"PALABRA-SECRETA"
}

export const roles = {
	admin:"admin",
	user:"user"
}

export const webConfig = {
	protocol:"http",
	host:"localhost:3000/"
}

export const emailTransportConfig = {
	host:"smtp.ethereal.email",
	port:587,
	secure:false, // true for 465, false for other ports
	testAccount:true,
	authUser:"",
	authPass:""
}