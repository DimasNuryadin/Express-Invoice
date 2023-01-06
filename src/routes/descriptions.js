const express = require('express')
const router = express.Router()
const DescriptionsController = require('../controller/descriptions')

router.get('/', DescriptionsController.getAllDescriptions);
router.post('/', DescriptionsController.createNewDescriptions);
router.patch('/:id', DescriptionsController.updateDescription);
router.delete('/:id', DescriptionsController.deleteDescriptions);

module.exports = router