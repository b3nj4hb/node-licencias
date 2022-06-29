import { pool } from '../database'
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const helpers = require('../libs/helpers'); 
const bcrypt = require('bcryptjs');
const refreshTokens = [];
export const login = async (req, res)=>{
    try {
       const {user, password} = req.body;
       
       //console.log(pass);
       const response = await pool.query('CALL sp_validar_usuario($1)', [user]);      
       if(response.rows.length!=0){           
           const passold = response.rows[0].password;
           if(await bcrypt.compare(password, passold)){
                const user = {
                    idpersona : response.rows[0].idpersona,
                    iduser : response.rows[0].idusuario,
                    nombres : response.rows[0].nombre+' '+response.rows[0].ape_pat+' '+response.rows[0].ape_mat,
                    user : response.rows[0].user,
                    rol : response.rows[0].rol
                }
                const accessToken = jwt.sign({user}, config.secret, {expiresIn:'32s'});
                const refreshToken = jwt.sign({user}, config.refreshTokenSecret);
                refreshTokens.push(refreshToken);
                return res.status(200).json({
                    accessToken,
                    refreshToken
                });
           }else{
                return res.status(200).json(
                    'Username o Password incorrectos...!'
                );
           }           
       }
       return res.status(200).json(
           'Username o Password incorrectos...!'
       );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al validar usuario...!');
    }    
};

export const token = async (req, res)=>{
    try {
        const { token } = req.body;
        if(!token){
            return res.sendStatus(401);
        }
        if(!refreshTokens.includes(token)){
            return res.sendStatus(403);
        }
        jwt.verify(token, config.refreshTokenSecret, (err, user)=>{
            if(err){
                return res.sendStatus(403);
            }
        });
    } catch (e) {
        console.log(e);
        
    }
};
