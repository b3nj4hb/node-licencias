var mysql = require('mysql');

export const conn = mysql.createConnection({
    host: 'n4m3x5ti89xl6czh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'nx875blgp3s1gx8r',
    password: 'x9j824ls2b1ionbi',
    database: 'qv6rluhzvagarjun'
});

conn.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + conn.threadId);
});