require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

//Mongo db connection
const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.5bc0l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo db instance')
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo db', err)
});

