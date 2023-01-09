const express = require('express')
const router = express.Router();
const InvoiceController = require('../controller/invoices')

router.get('/', InvoiceController.getAllInvoices) // GET ALL invoices
router.get('/:idInvoices', InvoiceController.getInvoices) // GET invoices by id
router.post('/', InvoiceController.createNewInvoices)  // CREATE invoices
router.patch('/step-1/:idInvoices', InvoiceController.updateInvoiceStep1)  // UPDATE invoices step-1
router.patch('/step-2/:idInvoices', InvoiceController.updateInvoiceStep2)  // UPDATE invoices step-2
router.delete('/:idInvoices', InvoiceController.deleteInvoice) // DELETE invoices

module.exports = router