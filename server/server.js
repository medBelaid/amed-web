const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.DATABASE_CLOUD)
.then(() => console.log('DB connected'))
.catch((err) => console.log(err));

const authRoutes = require('./routes/auth');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({ origin: process.env.CLIENT_URL }));
// middlewares
app.use('/api', authRoutes);

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`API is running on port ${port}`));
