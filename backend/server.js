const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Afegeix aquesta línia

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola des del backend!' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escoltant a http://localhost:${PORT}`);
});