import { conn } from "../database.js";
const controller = {};

export const list = async (req, res) => {
    conn.query("select * from rol;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

export const search = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("select * from rol where idrol = ?;", [id], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

export const save = async (req, res) => {
    const { id, rol } = req.body;
    conn.query("insert into rol values(?,?);", [id, rol], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

export const edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const { rol } = req.body;
    conn.query("update rol set rol = ? where idrol = ?;", [rol, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

export const deletee = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from rol where idrol = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

// module.exports = controller;