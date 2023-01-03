const express = require('express');
const app = express();
const usersRoutes = require('./routes/users')
const invoicesRoutes = require('./routes/invoices')

app.get('/', (req, res) => {
  res.send('Hello World')
  console.log('Success /')
})

// Users
app.use('/', usersRoutes)

// Invoices
app.use('/', invoicesRoutes)

app.listen(4000, () => {
  console.log('Aplikasi telah berjalan di port : 4000')
})