const jwt = require("jsonwebtoken");

function restrict(role) {
  return async (req, res, next) => {
    const authError = {
      message: "Invalid Creds",
    };
    try {
      const token = req.headers.token;
      if (!token) {
        return res.status(401).json(authError);
      }
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json(authError);
        }
        next();
      });
    } catch (err) {
      next(err);
    }
  };
}
module.exports = restrict;
