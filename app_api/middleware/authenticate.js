const jwt = require('jsonwebtoken');

/**
 * authenticate
 * Middleware that verifies a JWT token from the Authorization header.
 * Expects the header in the format: "Bearer <token>"
 * If the token is valid, attaches the decoded payload to req.auth
 * and calls next() to pass control to the next handler.
 * Returns 401 if the header is missing, the token is null,
 * or the token fails verification.
 */
const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Reject if Authorization header is missing entirely
  if (!authHeader) {
    console.log('Auth Header Required but NOT PRESENT!');
    return res.sendStatus(401);
  }

  // Split header and extract the token portion after "Bearer"
  const parts = authHeader.split(' ');
  if (parts.length < 2) {
    console.log('Malformed Auth Header: ' + authHeader);
    return res.sendStatus(401);
  }

  const token = parts[1];

  // Reject if token portion is empty
  if (!token) {
    console.log('Null Bearer Token');
    return res.sendStatus(401);
  }

  // Verify token signature and expiry against the JWT secret
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log('Token Validation Error: ' + err.message);
      return res.sendStatus(401);
    }
    // Attach decoded payload so downstream handlers can read req.auth
    req.auth = decoded;
  });

  next();
};

module.exports = { authenticate };
