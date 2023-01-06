const express = require('express');
const router = express.Router();
const DownPaymentsController = require('../controller/down_payments')

router.get('/', DownPaymentsController.getAllDownPayments)
router.post('/', DownPaymentsController.createDownPayments)
router.patch('/:id', DownPaymentsController.updateDownPayments)
router.delete('/:id', DownPaymentsController.deleteDownPayments)

module.exports = router;