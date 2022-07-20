import { conn } from "../database";

const controller = {}
const jwt = require('jsonwebtoken');
const config = require('../libs/config.json');
const bcrypt = require('bcryptjs');
const refreshTokens = [];

controller.login = async (req, res) => {
    const { user, password } = req.body;
    // console.log('~~ post ~~\n' + 'username: ' + username + '\npassword: ' + password + '\n~~~~~~~~~~~~')
    conn.query("call sp_validar_usuario(?);", [user], function (err, result) {
        try {
            // Hashear password
            // let passwordhashed = bcrypt.hashSync(password, 8);
            // console.log({ message: passwordhashed })
            const rUser = result[0][0].user;
            if (rUser == user) {
                const hashSaved = result[0][0].password;
                let compare = bcrypt.compareSync(password, hashSaved);
                if (compare) {
                    const user = {
                        idper: result[0][0]["idpersona"],
                        iduser: result[0][0]["idusuario"],
                        user: result[0][0]["user"],
                        rol: result[0][0]["rol"],
                        nombres: result[0][0]["nombres"]
                    }
                    const accessToken = jwt.sign({ user }, config.secret, { expiresIn: '32s' });
                    const refreshToken = jwt.sign({ user }, config.refreshTokenSecret);
                    refreshTokens.push(refreshToken);
                    return res.json({ message: 'validacion exitosa', accessToken, refreshToken });
                } else {
                    return res.json({ message: 'no son iguales' });
                }
            } else {
                return res.json({ message: 'Ingrese corretamente sus credenciales!' });
            }
        } catch (error) {
            return res.json({ message: '' + error });
        }
    });
};

controller.registrar = async (req, res) => {
    let sql = "call sp_ins_usuario (?,?,?);"
    const { user, password, idpersona } = req.body;
    // Hashear password
    let passwordhashed = bcrypt.hashSync(password, 8);
    // console.log({ message: passwordhashed })
    conn.query(sql, [user, passwordhashed, idpersona], function (err, result) {
        try {
            return res.json({ result });
        } catch (error) {
            return res.json({ e });
        }
    });
};

controller.token = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) { return res.sendStatus(401); }
        if (!refreshTokens.includes(token)) { return res.sendStatus(403); }
        jwt.verify(token, config.refreshTokenSecret, (err, user) => {
            if (err) { return res.sendStatus(403); }
        });
    } catch (e) { console.log(e); }
};

module.exports = controller;