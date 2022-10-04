const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/router'));

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
}, err => {
    if (err) {
        throw err;
    }
    console.log('Mongo DB Connection successful!');
});

// Start listening to the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});
