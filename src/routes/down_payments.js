const express = require('express');
const router = express.Router();
const DownPaymentsController = require('../controller/down_payments')

router.get('/:id_invoices', DownPaymentsController.getDownPayments)
router.post('/', DownPaymentsController.createDownPayments)
router.delete('/:id_invoices', DownPaymentsController.deleteDownPayments)

module.exports = router;