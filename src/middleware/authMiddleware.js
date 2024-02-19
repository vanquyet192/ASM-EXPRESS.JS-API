// authMiddleware.js

// Middleware function to authenticate user
const authenticateUser = (req, res, next) => {
    // Check if user is authenticated
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // If authenticated, proceed to next middleware or route handler
    next();
};

module.exports = { authenticateUser };
