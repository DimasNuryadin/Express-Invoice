const express = require('express');
const app = express();
const usersRoutes = require('./routes/users')
const invoicesRoutes = require('./routes/invoices')
const middlewareLogRequest = require('./middleware/log')

app.use(express.json());  // Mengizinkan req.body berupa json

// Users
app.use('/', usersRoutes)

// Middleware
app.use('/invoices', middlewareLogRequest)
// Invoices
app.use('/', invoicesRoutes)

app.listen(4000, () => {
  console.log('Aplikasi telah berjalan di port : 4000')
})