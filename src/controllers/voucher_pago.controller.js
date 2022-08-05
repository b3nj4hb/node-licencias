import { conn } from "../database.js";
const controller = {};

export const list = async (req, res) => {
    conn.query("select * from voucher_pago;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

export const search = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("select * from voucher_pago where idvoucher = ?;", [id], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

export const save = async (req, res) => {
    const { id, fecha, idtipo_riesgo, idpersona } = req.body;
    conn.query("insert into voucher_pago values(?,?,?,?);", [id, fecha, idtipo_riesgo, idpersona], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

export const edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const { fecha } = req.body;
    conn.query("update voucher_pago set fecha = ?, idtipo_riesgo = ?, idpersona = ? where idvoucher = ?;", [idpersona, idtipo_riesgo, fecha, id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

export const deletee = async (req, res) => {
    const id = parseInt(req.params.id);
    conn.query("delete from voucher_pago where idvoucher = ?;", [id], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

// module.exports = controller;