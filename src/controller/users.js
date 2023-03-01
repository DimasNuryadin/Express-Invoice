const UsersModels = require('../models/users')
const jwt = require('jsonwebtoken');
const config = require('../config/secret_jwt');
const nodemailer = require('../config/nodemailer')

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
        expiresIn: '86400000' // berakhir dalam 1 hari
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

const sendEmail = async (req, res) => {
  const { body } = req;

  if (!body.nama) {
    return res.status(400).json({
      message: 'Nama wajib diisi!'
    })
  } else if (!body.phone) {
    return res.status(400).json({
      message: 'No Telepon wajib diisi!'
    })
  } else if (!body.email) {
    return res.status(400).json({
      message: 'Email wajib diisi!'
    })
  } else if (!body.message) {
    return res.status(400).json({
      message: 'Message wajib diisi!'
    })
  }

  try {
    const data = await nodemailer(body.nama, body.phone, body.email, body.message)

    if (data.messageId.length) {
      res.status(200).json({
        message: 'Email terkirim',
        email: body.email,
        sendTo: data.accepted[0]
      })
    } else {
      res.status(400).json({
        message: 'Email gagal terkirim',
        email: body.email
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
  sendEmail,
}