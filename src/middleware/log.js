const logRequest = (req, res, next) => {
  // console.log('Log terjadi di API ini : ', req.path)
  next();
}

module.exports = logRequest