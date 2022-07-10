import { conn } from "../database";
const controller = {};

controller.list = async (req, res) => {
    conn.query("select * from persona;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

controller.search = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("select * from persona where idpersona = ?;", [id], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

/*
controller.save = async (req, res) => {
    const { id, idtipo_persona, nombre, ape_pat, ape_mat, idtipo_documento, num_documento, ruc, correo, direccion_notificacion, telefono } = req.body;
    conn.query("insert into persona values(?,?,?,?,?,?,?,?,?,?,?);", [id, idtipo_persona, nombre, ape_pat, ape_mat, idtipo_documento, num_documento, ruc, correo, direccion_notificacion, telefono], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};
*/

controller.save = async (req, res) => {
    const { idtipo_persona, nombre, ape_pat, ape_mat, idtipo_documento, num_documento, ruc, correo, direccion_notificacion, telefono } = req.body;
    conn.query("CALL SP_INS_PERSONA( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @V_ID );", [idtipo_persona, nombre, ape_pat, ape_mat, idtipo_documento, num_documento, ruc, correo, direccion_notificacion, telefono], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

controller.edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const { idtipo_persona, nombre, idtipo_documento, num_documento, ruc, correo, direccion_notificacion, telefono } = req.body;
    conn.query("update persona set idtipo_persona = ?, nombre = ?, ape_pat = ?, ape_mat = ?, idtipo_documento = ?, num_documento = ?, ruc = ?, correo = ?, direccion_notificacion = ?, telefono = ? where idpersona = ?;", [telefono, direccion_notificacion, correo, ruc, num_documento, idtipo_documento, ape_mat, ape_pat, nombre, idtipo_persona, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

controller.delete = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from persona where idpersona = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

controller.retornarid = async (req, res) => {
    const ruc = parseInt(req.params.ruc);
    const num_documento = parseInt(req.params.num_documento);
    // const { ruc, num_documento } = req.body;
    conn.query("select idpersona  from persona where ruc = ? and num_documento = ?;", [ruc, num_documento], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al retornarid ' + e);
        }
    });
};

controller.updurl = async (req, res) => {
    const id = parseInt(req.params.id);
    const { url } = req.body;
    conn.query("update persona set url = ? where idpersona = ?;", [url, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Actualizado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al actualizar ' + e);
        }
    });
};

module.exports = controller;