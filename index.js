const express = require('express');
const connectToMongo = require('./db');
const app = express()
const port = 3000
app.use(express.json())
connectToMongo();
// API for authentication and user settings
app.use('/api/auth', require('./routes/auth'));
app.use('/api/trans', require('./routes/transaction'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})