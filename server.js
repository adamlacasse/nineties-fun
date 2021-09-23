const express = require('express');
const path = require('path');
const app = express();

const buildFolder = path.join(__dirname, './build');
const indexHtml = path.join(buildFolder, 'index.html');

const port = process.env.PORT || 3001;

app.use(express.static(buildFolder));

app.get('*', (req, res) => {
  res.sendFile(indexHtml);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
