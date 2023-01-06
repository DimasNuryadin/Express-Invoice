const UsersModels = require('../models/users')
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');

const loginUser = async (req, res) => {
  const { body } = req;

  try {
    const [data] = await UsersModels.loginUser(body);
    // Data destructuring
    const data1 = data[0];
    const token = jwt.sign(data1, config.secret);

    if (data.length === 1) {
      res.status(200).json({
        message: 'LOGIN users success',
        data: {
          id: data1.id,
          username: data1.username,
          password: data1.password,
          token: token
        },
      })
    } else {
      res.status(401).json({
        message: 'username atau password salah',
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