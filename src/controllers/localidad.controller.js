import { conn } from "../database";
const controller = {};

controller.list = async (req, res) => {
    conn.query("select * from localidad;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

controller.search = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("select * from localidad where idlocalidad = ?;", [id], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

controller.save = async (req, res) => {
    const {referencia, direccion, iddistrito } = req.body;
    conn.query("insert into localidad values(null,?,?,?);", [referencia, direccion, iddistrito], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

controller.edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const { referencia } = req.body;
    conn.query("update localidad set referencia = ?, direccion = ?, iddistrito = ? where idlocalidad = ?;", [iddistrito, direccion, referencia, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

controller.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from localidad where idlocalidad = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

controller.retornarid = async (req, res) => {
    const referencia = String(req.params.referencia);
    const direccion = String(req.params.direccion);
    // const { ruc, num_documento } = req.body;
    conn.query("select idlocalidad from localidad where referencia = ? and direccion = ?;", [referencia, direccion], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al retornarid ' + e);
        }
    });
};

module.exports = controller;