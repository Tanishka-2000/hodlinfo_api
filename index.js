const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(MONGODV_URL)
.then(() => console.log('connected to database!'))
.catch((err) => console.log('database error', err));

const app = express();

const dataApi = require('./routes/data');
app.use('/', dataApi);

app.listen(4000, () => console.log('Server connected'))

// to do
// 0. install dotenv and store mongodb url 
// 1. connect to database
// 2. create data model
// 3. create a file named 'populatedb' and store data from api to database
// 4. create api endpoint for fetching and serving data