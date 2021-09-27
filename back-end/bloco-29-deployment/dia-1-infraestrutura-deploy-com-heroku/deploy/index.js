const express = require('express');
const app = express();
const port = 3001;

app.get('/', (_req, res) => {
  res.send('Está vivo!!!');
});

app.listen(port, () => console.log(`Ouvindo a porta ${port}`));