require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  createToken: (payload) => {
    return jwt.sign(payload, process.env.JWT_KEY);
  },
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      req.user = decoded;
      next();
    });
  },
};
