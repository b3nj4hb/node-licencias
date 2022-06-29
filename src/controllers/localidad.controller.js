import { conn } from "../database";

export const getLocalidades = async (req, res) => {
    conn.query("select * from persona;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar '+ e);
        }
    });
};
