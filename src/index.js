require('dotenv').config()
const PORT = process.env.PORT || 4000;
const express = require('express');
const app = express();
const usersRoutes = require('./routes/users')
const invoicesRoutes = require('./routes/invoices')
const descriptionsRoutes = require('./routes/descriptions')
const downPaymentRoutes = require('./routes/down_payments')
const verifyToken = require('./middleware/verify_token');
const cors = require('cors')

// Mengizinkan express network
app.use(cors())
app.use(express.json());  // Mengizinkan req.body berupa json

// Users
app.use('/users', usersRoutes)

// Middleware
app.use('/', verifyToken)
app.use('/invoices', invoicesRoutes)
app.use('/descriptions', descriptionsRoutes)
app.use('/down_payments', downPaymentRoutes)

app.listen(PORT, () => {
  console.log(`Aplikasi telah berjalan di port :`, PORT)
})