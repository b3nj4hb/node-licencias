import { conn } from "../database";
const controller = {};

controller.list = async (req, res) => {
    conn.query("select * from departamento;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

controller.search = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("select * from departamento where iddepartamento = ?;", [id], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

controller.save = async (req, res) => {
    const { id, nombre } = req.body;
    conn.query("insert into departamento values(?,?);", [id, nombre], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

controller.edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;
    conn.query("update departamento set nombre = ? where iddepartamento = ?;", [nombre, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

controller.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from departamento where iddepartamento = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

module.exports = controller;