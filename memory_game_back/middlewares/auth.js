const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWTSECRET);
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next()
  }
  req.userId = decodedToken.id;
  req.isAuth = true;
  next();
};
