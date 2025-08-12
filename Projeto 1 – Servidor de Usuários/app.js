//usado pra importar o módulo do express com suas funcionalidades
const express = require ("express");

const app = express();

const PORT = 8081;

app.listen(
    PORT, () => {
        console.log(`Servidor de Usuáriois rodando na porta: ${PORT}`)
    }
);
