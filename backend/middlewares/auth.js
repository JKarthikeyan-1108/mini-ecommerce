const { auth } = require('../config/firebaseAdmin');

const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: No token provided'
    });
  }

  const token = authHeader.split('Bearer ')[1];
  try {
    if (!auth) {
      return res.status(500).json({
        success: false,
        message: 'Server auth service unavailable'
      });
    }
    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Unauthorized: Invalid or expired token',
      error: error.message
    });
  }
};

module.exports = { verifyFirebaseToken };
