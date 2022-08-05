import { conn } from "../database.js";
const controller = {};

export const list = async (req, res) => {
    conn.query("select * from tipo_riesgo;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

export const search = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("select * from tipo_riesgo where idtipo_riesgo = ?;", [id], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

export const save = async (req, res) => {
    const { id, tipo_riesgo } = req.body;
    conn.query("insert into tipo_riesgo values(?,?);", [id, tipo_riesgo], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

export const edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const { tipo_riesgo } = req.body;
    conn.query("update tipo_riesgo set tipo_riesgo = ? where idtipo_riesgo = ?;", [tipo_riesgo, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

export const deletee = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from tipo_riesgo where idtipo_riesgo = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

// module.exports = controller;