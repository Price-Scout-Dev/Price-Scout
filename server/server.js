const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');

const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));

});

app.get('/api/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));

});

app.listen(PORT, () => console.log('Server Running On Port ' + PORT));
