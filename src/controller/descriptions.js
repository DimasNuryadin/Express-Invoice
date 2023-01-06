const DescriptionsModels = require('../models/descriptions')

const getAllDescriptions = async (req, res) => {
  try {
    const [data] = await DescriptionsModels.getAllDescrptions();
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

const updateDescription = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await DescriptionsModels.updateDescriptions(body, id)
    res.json({
      message: 'Update descriptions success',
      data: body,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      errorMessage: error
    })
  }
}

const deleteDescriptions = async (req, res) => {
  const { id } = req.params
  // console.log(id)
  try {
    await DescriptionsModels.deleteDescriptions(id);
    res.json({
      message: 'DELETE descriptions success',
      data: {
        id: id
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
  getAllDescriptions,
  createNewDescriptions,
  updateDescription,
  deleteDescriptions
}