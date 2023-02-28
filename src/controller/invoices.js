const InvoicesModel = require('../models/invoices')

// GET ALL invoices
// const [rows, field] = await InvoicesModel.getAllInvoices();

const getAllInvoices = async (req, res) => {
  // Mengambil data dari jwt = console.log("request : ", req.user);

  try {
    const [data] = await InvoicesModel.getAllInvoices();

    res.json({
      message: 'GET all invoices success',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

const getInvoices = async (req, res) => {
  const { idInvoices } = req.params;

  try {
    const [data] = await InvoicesModel.getInvoices(idInvoices)
    res.json({
      message: 'GET invoices succes',
      data: data[0],
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

const getInvoicesCompany = async (req, res) => {
  const { company } = req.params;

  try {
    const [data] = await InvoicesModel.getInvoicesCompany(company);
    res.status(201).json({
      message: 'GET invoices company success',
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

// CREATE invoices
const createNewInvoices = async (req, res) => {
  // Destructuring dari req.body
  const { body } = req;
  try {
    const [data] = await InvoicesModel.createNewInvoices(body);
    res.status(201).json({
      message: 'CREATE invoices success',
      data: {
        id: data.insertId,
        ...body
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

// UPDATE invoices step-1
const updateInvoiceStep1 = async (req, res) => {
  const { idInvoices } = req.params
  // console.log('id invoices', idInvoices)
  const { body } = req;
  try {
    await InvoicesModel.updateInvoiceStep1(body, idInvoices);
    res.status(201).json({
      message: 'UPDATE invoices success',
      data: {
        id: idInvoices,
        ...body
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

// UPDATE invoices step-2
const updateInvoiceStep2 = async (req, res) => {
  const { idInvoices } = req.params
  // console.log('id invoices', idInvoices)
  const { body } = req;
  try {
    await InvoicesModel.updateInvoiceStep2(body, idInvoices);
    res.status(201).json({
      message: 'UPDATE invoices success',
      data: {
        id: idInvoices,
        ...body
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

// DELETE invoices
const deleteInvoice = async (req, res) => {
  const { idInvoices } = req.params;
  try {
    await InvoicesModel.deleteInvoices(idInvoices)
    res.json({
      message: 'DELETE invoices success',
      data: {
        id: idInvoices,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

module.exports = {
  getAllInvoices,
  getInvoices,
  getInvoicesCompany,
  createNewInvoices,
  updateInvoiceStep1,
  updateInvoiceStep2,
  deleteInvoice
}