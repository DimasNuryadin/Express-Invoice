const DescriptionsModels = require('../models/descriptions')

const getDescriptions = async (req, res) => {
  const { id_invoices } = req.params;

  try {
    const [data] = await DescriptionsModels.getDescriptions(id_invoices);
    res.json({
      message: 'GET descriptions success',
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      errorMessage: error
    })
  }
}

const createNewDescriptions = async (req, res) => {
  const { body } = req;
  try {
    await DescriptionsModels.createNewDescriptions(body);
    res.status(201).json({
      message: 'CREATE descriptions success',
      data: body,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      errorMessage: error
    })
  }
}

const deleteDescriptions = async (req, res) => {
  const { id_invoices } = req.params
  // console.log(id)
  try {
    await DescriptionsModels.deleteDescriptions(id_invoices);
    res.json({
      message: 'DELETE descriptions success',
      data: {
        id_invoices: id_invoices
      }
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      errorMessage: error
    })
  }
}

module.exports = {
  getDescriptions,
  createNewDescriptions,
  deleteDescriptions
}