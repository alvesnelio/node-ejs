const express = require('express');
const app = express();

// Falando para o express pela "view engine" que a ferramenta para renderizaro HTML é o EJS.
app.set('view engine', 'ejs');

// Rota principal
app.get('/', function (req, res) {
  res.render('./pages/index');
});

app.get('/about', function (req, res) {
  res.render('./pages/about');
});

app.listen(8080);

console.log("Server running on port 8080");