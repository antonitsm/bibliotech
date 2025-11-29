const express = require('express');
const authorController = require('../controllers/author.controller');

const router = express.Router();

// Rotas para Autores (CRUD Simples)

// GET /api/authors - Listar todos os autores
router.get('/', authorController.getAllAuthors);

// GET /api/authors/:id - Obter autor por ID
router.get('/:id', authorController.getAuthorById);

// POST /api/authors - Criar novo autor
router.post('/', authorController.createAuthor);

// PUT /api/authors/:id - Atualizar autor (Opcional)
router.put('/:id', authorController.updateAuthor);

// DELETE /api/authors/:id - Deletar autor (Opcional)
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;
