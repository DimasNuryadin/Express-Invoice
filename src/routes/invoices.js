const express = require('express')
const router = express.Router();
const InvoiceController = require('../controller/invoices')

router.get('/invoices', InvoiceController.getAllInvoices)

router.post('/invoices', InvoiceController.createNewInvoices)

module.exports = router