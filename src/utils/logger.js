// logger.js

// Function to log messages to console
const logMessage = (message) => {
    console.log(`[INFO] ${message}`);
};

// Function to log errors to console
const logError = (error) => {
    console.error(`[ERROR] ${error}`);
};

module.exports = { logMessage, logError };
