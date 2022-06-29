import { conn } from "../database";
const controller = {};

controller.list = async (req, res) => {
    conn.query("select * from departamento;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar '+ e);
        }
    });
};

module.exports = controller;