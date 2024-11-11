function checkAdminRole(req, res, next) {
  const admin = req.query.admin;

  if (admin === 'true') {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(403).send('Access denied');
  }
}

module.exports = checkAdminRole;
