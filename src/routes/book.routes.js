const express = require('express');
const bookController = require('../controllers/book.controller');

const router = express.Router();

// Rotas para Livros (CRUD Completo)

// GET /api/books - Listar todos os livros
router.get('/', bookController.getAllBooks);

// GET /api/books/:id - Obter livro por ID
router.get('/:id', bookController.getBookById);

// POST /api/books - Criar novo livro
router.post('/', bookController.createBook);

// PUT /api/books/:id - Atualizar livro (Substituição completa)
router.put('/:id', bookController.updateBook);

// DELETE /api/books/:id - Deletar livro
router.delete('/:id', bookController.deleteBook);

module.exports = router;
