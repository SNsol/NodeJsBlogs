const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');

const PORT = process.env.PORT || 3000


mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('DB Connected!!!!!');
    });

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes

// Import Auth Routes
authRoutes = require('./route/auth');

// Import API Routes
apiRoutes = require('./route/api');

// Import Web Routes
webRoutes = require('./route/web');

// Middleware
// Use Auth Routes as middleware
app.use('/api/user', apiRoutes);

// Use Api Routes as middleware
app.use('/api', apiRoutes);

// Use Web Routes as middleware
app.use('/', webRoutes);


app.listen(PORT, () => {

})