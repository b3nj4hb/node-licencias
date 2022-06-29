import { conn } from "../database";
const controller = {};

controller.list = async (req, res) => {
    conn.query("select * from tipo_documento;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

controller.search = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("select * from tipo_documento where idtipo_documento = ?;", [id], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

controller.save = async (req, res) => {
    const { id, tipo_documento } = req.body;
    conn.query("insert into tipo_documento values(?,?);", [id, tipo_documento], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

controller.edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const { tipo_documento } = req.body;
    conn.query("update tipo_documento set tipo_documento = ? where idtipo_documento = ?;", [tipo_documento, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

controller.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from tipo_documento where idtipo_documento = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

module.exports = controller;