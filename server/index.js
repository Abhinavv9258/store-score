const express = require('express');
const app = express();
// const cors = require('cors');
require('dotenv').config();
// const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port} ......`);
})