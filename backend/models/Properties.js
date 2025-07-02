const db = require('../config/db');
const { create } = require('./User');

const Properties = {
    create : (title, description, location, price , imagUrl, owner_id, callback) =>{
        db.query('insert into properties (title, description, location ,price, imageUrl,owner_id) values(?,?,?,?,?,?)',[title, description, location, price, imagUrl, owner_id], callback);   
    },
    findAll:(callback) => {
        db.query('select * from properties', callback);
    },
    delete : (id, callback) => {
        db.query('delete from properties where id = ?',[id], callback);
    }
};
module .exports = Properties;