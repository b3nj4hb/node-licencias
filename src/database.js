 import { Pool } from 'pg'

 export const pool = new Pool({
     host:'ec2-34-198-186-145.compute-1.amazonaws.com',
     user:'rbtdjdgiuiaclx',
     password:'973e467689fab6622575e63c49692a4a524b9be5635e4cd2ded83ebe61bd4f2f',
     database: 'df5h8os2c1g906',
     port:5432,
     ssl:{rejectUnauthorized:false}
 });

// const mysql = require("mysql");
// // Coloca aquí tus credenciales
// module.exports = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "admin",
//   database: "licencias"
// });

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'admin',
//   database: "licencias"
// });
 
// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });