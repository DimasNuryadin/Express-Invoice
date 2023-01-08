const express = require('express')
const router = express.Router();
const InvoiceController = require('../controller/invoices')

router.get('/', InvoiceController.getAllInvoices) // GET ALL invoices
router.get('/:idInvoices', InvoiceController.getInvoices) // GET invoices by id
router.post('/', InvoiceController.createNewInvoices)  // CREATE invoices
router.patch('/:idInvoices', InvoiceController.updateInvoice)  // UPDATE invoices
router.delete('/:idInvoices', InvoiceController.deleteInvoice) // DELETE invoices

module.exports = router