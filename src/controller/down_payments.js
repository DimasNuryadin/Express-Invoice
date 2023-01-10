const DownPaymentsModels = require('../models/down_payments');

const getDownPayments = async (req, res) => {
  const { id_invoices } = req.params;

  try {
    const [data] = await DownPaymentsModels.getDownPayments(id_invoices);
    res.json({
      message: 'GET down_payment success',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      messageError: error
    })
  }
}

const createDownPayments = async (req, res) => {
  const { body } = req;

  try {
    await DownPaymentsModels.createNewDownPayments(body);
    res.status(201).json({
      message: 'CREATE down_payment success',
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      messageError: error
    })
  }
}

const deleteDownPayments = async (req, res) => {
  const { id_invoices } = req.params;

  try {
    await DownPaymentsModels.deleteDownPayments(id_invoices);
    res.status(200).json({
      message: 'DELETE down_payment success',
      data: {
        id: id_invoices,
      }
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      messageError: error
    })
  }
}

module.exports = {
  getDownPayments,
  createDownPayments,
  deleteDownPayments
}