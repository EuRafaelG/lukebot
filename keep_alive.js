const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('O bot está online!');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000.');
});
