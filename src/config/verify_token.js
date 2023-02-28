const jwt = require('jsonwebtoken');
const config = require('./secret_jwt');

const verifyToken = (req, res) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({
      message: 'Anda belum login',
      error: 'Unauthorized'
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = decoded.user;
    console.log('decoded token : ', req.user)
    next();
  })
}

module.exports = verifyToken;