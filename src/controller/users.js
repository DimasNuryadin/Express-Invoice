const UsersModels = require('../models/users')
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');

const loginUser = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password) {
    return res.status(400).json({
      message: 'Email dan password tidak boleh kosong',
      data: null
    })
  }

  try {
    const [data] = await UsersModels.loginUser(body);

    if (data.length === 1) {
      // Data destructuring
      const data1 = data[0];
      const token = jwt.sign(data1, config.secret, {
        expiresIn: '24000'
      });
      res.status(200).json({
        message: 'LOGIN users success',
        token: token
      })
    } else {
      res.status(403).json({
        message: 'Email atau password salah',
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      messageError: error
    })
  }
}

module.exports = {
  loginUser,
}