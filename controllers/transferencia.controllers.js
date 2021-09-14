const { response, request } = require('express')
const db = require('../db/config')


const getTransferencias = async(req, res) => {
    try {
        const text = 'SELECT * FROM transferencias';
        const objQuery = {
            name: 'get-transferencias',
            text,
            rowMode: 'array'
        }
        const { rows } = await db.query(objQuery);
        res.json(rows).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).json('Hubo un error')
    }

}


const createTransferenciaTransaction = async(req, res) => {
    try {
        const { emisor, receptor, monto } = req.body;
        const fecha_inicial = new Date();
        const userTimezoneOffset = fecha_inicial.getTimezoneOffset() * 60000;
        const fecha = new Date(Date.now() - userTimezoneOffset);
        console.log(monto);

        const idEmisor = await getIDUsuario(emisor);
        const idReceptor = await getIDUsuario(receptor);


        const transferenciaText = 'INSERT INTO transferencias(emisor,receptor,monto,fecha) VALUES($1,$2,$3,$4)';
        const transferenciaValues = [idEmisor, idReceptor, monto, fecha];
        const objTransferencia = {
            name: 'create-transferencia',
            text: transferenciaText,
            values: transferenciaValues
        }
        await db.query('BEGIN');
        await db.query(objTransferencia);
        await updateUsuario(idEmisor, monto, true);
        await updateUsuario(idReceptor, monto, false);
        await db.query('COMMIT');
        res.json({
            message: 'Transferencia realizada con exito',
        }).status(200);
    } catch (error) {
        await db.query('ROLLBACK');
        console.log(error);
        res.status(500).json('Hubo un error')
    }
}
const updateUsuario = async(id, monto, esEmisor) => {
    try {
        esEmisor ? text = 'UPDATE usuarios SET balance = balance - $1 WHERE id = $2 RETURNING *;' : text = 'UPDATE usuarios SET balance = balance + $1 WHERE id = $2 RETURNING *;';
        const values = [monto, id];
        const objQuery = {
            text,
            values
        }
        const { rows } = await db.query(objQuery);
        return rows;
    } catch (error) {
        console.log(error);
        return error;
    }
}


const getIDUsuario = async(nombre) => {
    try {
        const text = 'SELECT id FROM usuarios WHERE nombre = $1';
        const values = [nombre];
        const objQuery = {
            name: 'get-id-usuario',
            text,
            values
        }
        const usuario = await db.query(objQuery);
        return usuario.rows[0].id;
    } catch (error) {
        console.log(error);
        return error;
    }
}


module.exports = {
    getTransferencias,
    createTransferenciaTransaction
}