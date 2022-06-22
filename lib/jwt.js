require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  createToken: (payload) => {
    return jwt.sign(payload, process.env.JWT_KEY);
  },
  verifyToken: (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(422).send({ success: false });
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(422).send({ success: false });
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      req.user = decoded;
      next();
    });
  },
};
