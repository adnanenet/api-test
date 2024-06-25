const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/receive-data', (req, res) => {
  console.log('Data received:', req.body);
  res.send('Data received successfully');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
