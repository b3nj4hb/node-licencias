import { conn } from "../database";
const controller = {};

controller.list = async (req, res) => {
    conn.query("select * from usuario;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

controller.search = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("select * from usuario where idusuario = ?;", [id], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

controller.save = async (req, res) => {
    const { id, user, password, idrol, idpersona } = req.body;
    conn.query("insert into usuario values(?,?,?,?,?);", [id, user, password, idrol, idpersona], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

controller.edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const { user } = req.body;
    conn.query("update usuario set user = ?, password = ?, idrol = ?, idpersona = ? where idusuario = ?;", [idpersona, idrol, password, user, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

controller.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from usuario where idusuario = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

module.exports = controller;