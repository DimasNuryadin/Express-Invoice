const DownPaymentsModels = require('../models/down_payments');

const getAllDownPayments = async (req, res) => {
  try {
    const [data] = await DownPaymentsModels.getAllDownPayments();
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

const updateDownPayments = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await DownPaymentsModels.updateDownPayments(body, id)

    res.status(201).json({
      message: 'UPDATE down_payment succes',
      data: {
        id: id,
        ...body
      }
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      messageError: error
    })
  }
}

const deleteDownPayments = async (req, res) => {
  const { id } = req.params;

  try {
    await DownPaymentsModels.deleteDownPayments(id);
    res.status(200).json({
      message: 'DELETE down_payment success',
      data: {
        id: id,
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
  getAllDownPayments,
  createDownPayments,
  updateDownPayments,
  deleteDownPayments
}