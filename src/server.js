const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = 3000;

connectDB
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello node api!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
