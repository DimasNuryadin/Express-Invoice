require('dotenv').config()
const PORT = process.env.PORT || 4000;
const express = require('express');
const app = express();
const usersRoutes = require('./routes/users')
const invoicesRoutes = require('./routes/invoices')
const middlewareLogRequest = require('./middleware/log')

app.use(express.json());  // Mengizinkan req.body berupa json

// Users
app.use('/', usersRoutes)

// Middleware
app.use('/', middlewareLogRequest)
app.use('/invoices', invoicesRoutes)

app.listen(PORT, () => {
  console.log(`Aplikasi telah berjalan di port :`, PORT)
})