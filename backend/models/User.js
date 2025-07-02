const  db = require('../config/db');

const User = {
    create :( username ,password,callback) => {
        db.query('insert into users (username ,password) values (?,?)',[username,password],callback);
        },
    findByUsername: (username, callback) => {
    db.query('select * from users where username = ?',[username],callback);
    }
}; 

module.exports = User;