import { response } from "express";
import { conn } from "../database";

const controller = {}
const jwt = require('jsonwebtoken');
const config = require('../libs/config.json');
const bcrypt = require('bcryptjs');
const refreshTokens = [];

// var salt = bcrypt.genSaltSync(10);

/** Encrypt password */
/*bcrypt.hash('anypassword', salt, (err, res) => {
    console.log('hash', res)
    hash = res
    compare(hash)
});*/

controller.login = async (req, res) => {
    const { username, password } = req.body;
    console.log('~~ post ~~\n' + 'username: ' + username + '\npassword: ' + password + '\n~~~~~~~~~~~~')
    //console.log(pass);
    conn.query("call sp_validar_usuario(?);", [username], function (err, result) {
        try {
            // return res.status(200).json(result);
            if (result[0].length != 0) {
                const passold = result[0][0].password;
                if (bcrypt.compare(password, passold)) {
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
                    return res.status(200).json({ accessToken, refreshToken });
                } else {
                    return res.status(200).json('Username o Password incorrectos...!');
                }
            }
            return res.status(200).json('Username o Password incorrectos...!');
        } catch (error) {
            return res.status(500).json('Error al VALIDAR USUARIO ');
        }
    });
};

controller.token = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) {
            return res.sendStatus(401);
        }
        if (!refreshTokens.includes(token)) {
            return res.sendStatus(403);
        }
        jwt.verify(token, config.refreshTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
        });
    } catch (e) {
        console.log(e);

    }
};

module.exports = controller;