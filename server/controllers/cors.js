module.exports = function(req, res, next) {
  res.sendHeader('Access-Control-Allow-Origin', '*');
  next();
}