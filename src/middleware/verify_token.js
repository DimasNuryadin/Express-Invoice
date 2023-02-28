const jwt = require('jsonwebtoken');
const config = require('../config/secret_jwt');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({
      message: 'Anda belum login',
      error: 'Unauthorized'
    });
  }
  // console.log(token)

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: 'Sesi telah berakhir silahkan login kembali!',
        error: 'Forbidden'
      });
    } else {
      req.user = decoded;
      next();
    }

    // console.log('decoded token : ', decoded)
  })
}

module.exports = verifyToken;