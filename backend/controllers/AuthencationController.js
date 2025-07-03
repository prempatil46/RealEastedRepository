const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


    exports.signup = async(req, res) => {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        User.create (username , hashedPassword, (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).send('User created successfully');
        });   
    };

   exports.login = async(req, res) => {
    const { username, password } = req.body;
    User.findByUsername(username, async (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length === 0) {
            console.log('No user found for:', username);
            return res.status(404).send('Invalid username or password');
        }
        const user = result[0];
        console.log('User found:', user);
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch);
        if (!isMatch) return res.status(404).send('Invalid username or password');

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.json({ token });
    });
};


