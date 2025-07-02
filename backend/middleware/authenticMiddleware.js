
const jwt = require('jsonwebtoken');

const authenticateMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token){
        return res.staus(403).send('...Token is required for.... ');
    }

    jwt. verify(token,process.env.jwt_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        req.user = decoded;
        next(); 
    });
};

module.exports = authenticateMiddleware;
