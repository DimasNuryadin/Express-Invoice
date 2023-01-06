const UsersModels = require('../models/users')

const loginUser = async (req, res) => {
  const { body } = req;

  try {
    const [data] = await UsersModels.loginUser(body);
    if (data.length === 1) {
      res.status(200).json({
        message: 'LOGIN users success',
        data: body
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