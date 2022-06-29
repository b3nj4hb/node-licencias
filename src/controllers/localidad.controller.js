import { conn } from "../database";
const controller = {};

controller.list = async (req, res) => {
    conn.query("select * from localidad;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar '+ e);
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
    const {id,referencia,direccion,iddistrito} = req.body;
    conn.query("insert into localidad values(?,?);", [id,referencia,direccion,iddistrito], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

controller.edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const {referencia} = req.body;
    conn.query("update localidad set referencia = ?, direccion = ?, iddistrito = ? where idlocalidad = ?;", [iddistrito,direccion,referencia,id], function (err, result) {
        try {
            return res.status(200).json({message:'Modificado correctamente'});
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

controller.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from localidad where idlocalidad = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({message:'Eliminado correctamente'});
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

module.exports = controller;