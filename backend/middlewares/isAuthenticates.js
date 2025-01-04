import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // Check if token is missing
    if (!token) {
       return res.status(401).json({
        message: "User not Authenticated",
        success: false,
      });
    }

    // Verify the token
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    // If verification fails, handle it
    if (!decode) {
      return res.status(401).json({
        message: "Invalid Token",
        success: false,
      });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
     return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
export default isAuthenticated;
