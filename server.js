const express = require('express');
const bookRoutes = require('./src/routes/book.routes');
const authorRoutes = require('./src/routes/author.routes');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Rotas
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('API de Livros e Autores está rodando! Acesse /api/books ou /api/authors');
});

// Middleware de tratamento de erro (opcional, mas boa prática)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});
