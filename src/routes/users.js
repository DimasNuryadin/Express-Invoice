const express = require('express')
const router = express.Router()

router.post('/users', (req, res) => {
  res.json({
    message: 'POST users success'
  })
})

module.exports = router;