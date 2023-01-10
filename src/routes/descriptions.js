const express = require('express')
const router = express.Router()
const DescriptionsController = require('../controller/descriptions')

router.get('/:id_invoices', DescriptionsController.getDescriptions);
router.post('/', DescriptionsController.createNewDescriptions);
router.delete('/:id_invoices', DescriptionsController.deleteDescriptions);

module.exports = router