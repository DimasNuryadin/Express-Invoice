const express = require('express')
const router = express.Router();
const InvoiceController = require('../controller/invoices')

router.get('/invoices', InvoiceController.getAllInvoices) // GET ALL invoices
router.post('/invoices', InvoiceController.createNewInvoices)  // CREATE invoices
router.patch('/invoices/:id', InvoiceController.updateInvoice)

module.exports = router