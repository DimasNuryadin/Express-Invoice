const express = require('express')
const router = express.Router();
const InvoiceController = require('../controller/invoices')

router.get('/', InvoiceController.getAllInvoices) // GET ALL invoices
router.post('/', InvoiceController.createNewInvoices)  // CREATE invoices
router.patch('/:id', InvoiceController.updateInvoice)  // UPDATE invoices
router.delete('/:id', InvoiceController.deleteInvoice) // DELETE invoices

module.exports = router