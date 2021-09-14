//TRUCAZO
const { response, request } = require('express')
const db = require('../db/config')


//HTTP METHODS
const getUsuarios = async(req = request, res = response) => {
    try {
        const text = 'SELECT * FROM usuarios';
        // const values = [];
        const objQuery = {
            name: 'get-usuarios',
            text,
            // values,
            // rowMode: 'array'
        };
        const { rows } = await db.query(objQuery);
        res.json(rows).status(200)
    } catch (error) {
        console.log(error);
        return error;
    }

}

const createUsuario = async(req = request, res = response) => {
    try {
        const { nombre, balance } = req.body;
        const text = 'INSERT INTO usuarios (nombre, balance) VALUES($1, $2) RETURNING *;'
        const values = [nombre, balance];
        const objQuery = {
            text,
            values,
            rowMode: 'array'
        };
        const { rows } = await db.query(objQuery);
        console.log(rows);
        res.json({
                msg: 'Usuario creada correctamente',
                data: rows[0]
            })
            .status(201)

    } catch (error) {
        console.log(error);
    }
}

const updateUsuario = async(req = request, res = response) => {
    try {
        const { id } = req.query;
        const { name, balance } = req.body;
        const text = 'UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3 RETURNING *;'
        const values = [name, balance, id];
        const objQuery = {
            text,
            values,
            rowMode: 'array'
        };
        const { rows } = await db.query(objQuery);
        res.json({
            msg: 'Usuario actualizado correctamente',
            data: rows[0]
        }).status(204)
    } catch (error) {
        console.log(error);
    }
}



const deleteUsuario = async(req = request, res = response) => {
    try {
        const { id } = req.query;
        const text = 'DELETE FROM usuarios WHERE id = $1 RETURNING *;'
        const values = [id];
        const objQuery = {
            text,
            values,
            rowMode: 'array'
        };
        const { rows } = await db.query(objQuery);
        res.json({
            msg: 'Ejercicio eliminado correctamente',
            data: rows[0]
        }).status(204)
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}