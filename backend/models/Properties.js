const db = require('../config/db');

const Properties = {
  create: (title, description, location, price, imageUrl, owner_id, callback) => {
    db.query(
      'INSERT INTO properties (title, description, location, price, imageUrl, owner_id) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description, location, price, imageUrl, owner_id],
      callback
    );
  },

  findAll: (callback) => {
    db.query('SELECT * FROM properties', callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM properties WHERE id = ?', [id], callback);
  },
};

module.exports = Properties;
