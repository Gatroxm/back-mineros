const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const minerRoutes = require('./routes/minerRoutes');
const authController = require('./controllers/authController');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/auth/login', authController.login);
app.use(authMiddleware); // Autenticación global

app.use(minerRoutes);

module.exports = app;
