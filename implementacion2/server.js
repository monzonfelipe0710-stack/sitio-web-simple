const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir la carpeta public como contenido estático
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Servidor Node activo en http://localhost:${PORT}`);
});