import { connect } from "../database"

export const getRoutine = async (req, res) =>{
    const id_user = [req.params.idUser]
    const dbConnection = await connect()
    const query = 'select u.username, mg.name as "muscleGroup", m.name as "muscle", t.name as "Ejercicio", s.repetition as "Repeticiones", s.weight, s.series, rou.day, rou.break_time '+ 
    'from users as u, restrictions as res, muscles as m, musclegroups as mg, training as t, sets as s, routines as rou '+ 
    'where u.id_user=res.id_user and '+
    'res.id_restriction=m.id_restriction and '+
    'mg.id_musclegroup=m.id_musclegroup and '+
    'm.id_muscle=t.id_muscle and '+
    't.id_training=s.id_training and '+
    's.id_set=rou.id_set and '+
    'u.id_user=?';
    const [response] = await dbConnection.query(query, id_user)
    res.json(response)
}
