const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ msg: 'Token faltante' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'Token inválido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // contiene id y rol
    next();
  } catch {
    return res.status(401).json({ msg: 'Token inválido o expirado' });
  }
};

module.exports = authMiddleware;
//