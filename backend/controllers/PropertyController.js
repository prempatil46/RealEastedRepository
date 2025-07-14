const Properties = require('../models/Properties');

exports.addProperty = (req, res) => {
  const { title, description, location, price, imageUrl } = req.body;
  const owner_id = req.user.id;

  Properties.create(title, description, location, price, imageUrl, owner_id, (err) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Property added successfully');
  });
};

exports.getAllProperties = (req, res) => {
  Properties.findAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.deleteProperty = (req, res) => {
  const propertyId = req.params.id;
  Properties.delete(propertyId, (err) => {
    if (err) return res.status(500).send(err);
    res.send('Property deleted successfully');
  });
};