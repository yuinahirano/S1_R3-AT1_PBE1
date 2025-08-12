//para importar o express e suas funcionalidades
const express = require ("express");

const app = express();

PORT = 8081;

app.listen(
    PORT, () => {
        console.log(`Servidor de Produtos rodando na porta${PORT}`)
    }
);
