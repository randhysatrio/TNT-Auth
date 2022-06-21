const { createToken } = require('../lib/jwt');

module.exports = {
  login: (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || username.trim() === '' || !password || password.trim() === '') {
        return res.status(422).send({ success: false });
      }

      const token = createToken({ username, password });

      res.status(200).send({ success: true, token });
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  verify: (req, res) => {
    try {
      const { username, password } = req.user;

      res.status(200).send({ username, password });
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
