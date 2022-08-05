import { conn } from "../database.js";
// const controller = {};

// controller.list = async (req, res) => {
export const list = async (req, res) => {
    conn.query("select * from distrito;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

export const search = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("select * from distrito where iddistrito = ?;", [id], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

export const save = async (req, res) => {
    const { id, nombre, idprovincia } = req.body;
    conn.query("insert into distrito values(?,?,?);", [id, nombre, idprovincia], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

export const edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;
    conn.query("update distrito set nombre = ?, idprovincia = ? where iddistrito = ?;", [idprovincia, nombre, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

export const deletee = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from distrito where iddistrito = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

// module.exports = controller;