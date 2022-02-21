import mysql from 'mysql2/promise'
import { configDB } from './config'

export const connect = async () =>{
	return await mysql.createConnection(configDB)
}