import jwt from "jsonwebtoken";

//check if the user is authenticated
export function isAuth(req, res, next) {
  const token = req.headers.authorization;
  try {
    const user = jwt.verify(token, process.env.JWT_KEY);
    req.user = user;
  } catch (error) {
    return res.status(401).json({ error: "Not Authorized" });
  }
  next();
}

//check if the user is admin
export function isAdmin(req, res, next) {
  const token = req.headers.authorization;
  try {
    const user = jwt.verify(token, process.env.JWT_KEY);
    if (!user.isAdmin) {
      return res.status(401).json({ error: "you are not admin" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    return res.status(401).json({ error: "you are not admin" });
  }
}
