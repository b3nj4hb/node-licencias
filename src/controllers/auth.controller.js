import { conn } from "../database";
const controller = {}

const jwt = require('jsonwebtoken');
const secret = "leidy-decret-access-token";
const refreshTokenSecret = "leidy-decret-refresh-access-token";
const port = 2000;
const tokenLife = 900;
const refreshTokenLife = 86400;
const helpers = require('../libs/helpers');
const bcrypt = require('bcryptjs');
const refreshTokens = [];

controller.login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username + password)
    //console.log(pass);
    conn.query("select * from usuario where user = ?;", [username], function (err, result) {
        try {
            if (result[0].length != 0) {
                const passold = result[0].PASSWORD;
                console.log(result[0].PASSWORD)
                if (bcrypt.compare(password, passold)) {
                    const user = {

                        username: result[0].USER
                    }
                    const accessToken = jwt.sign({ user }, secret, { expiresIn: '32s' });
                    const refreshToken = jwt.sign({ user }, refreshTokenSecret);
                    refreshTokens.push(refreshToken);
                    return res.status(200).json({
                        accessToken,
                        refreshToken
                    });
                } else {
                    return res.status(200).json(
                        'Username o Password incorrectos...!'
                    );
                }
            }
            return res.status(200).json(
                'Username o Password incorrectos...!'
            );
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