'use strict';
const express = require('express');
const cors = require('cors');
const trucks = require('./routes/trucks');
const app = express()
const port = 3000

app.use(cors());
app.use('/trucks', trucks);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
