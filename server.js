const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// db confiq
const db = require('./config/keys').mongoURI;

// connection for mongo db
mongoose.connect(db)
.then(() => console.log('mongoose connected'))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;

// use routes
app.use('/api/items', items);


app.listen(port, () => console.log(`Server started on port ${port}`));





