const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost', 
    port : 3306,
    user :'root',
    password : 'Deep989#',
    database : 'reale_estate_db'
});

db.connect ( err=> {

    if (err) throw  err;
    console.log('MySQL Connected...');
    });

module.exports = db;