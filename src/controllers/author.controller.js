const authorService = require('../services/author.service');

// Autores Controller (CRUD Simples)

// GET /authors
const getAllAuthors = (req, res) => {
    const authors = authorService.getAllAuthors();
    res.status(200).json(authors);
};

// GET /authors/:id
const getAuthorById = (req, res) => {
    const author = authorService.getAuthorById(req.params.id);
    if (author) {
        res.status(200).json(author);
    } else {
        res.status(404).json({ message: "Autor não encontrado." });
    }
};

// POST /authors (Criar)
const createAuthor = (req, res) => {
    const result = authorService.createAuthor(req.body);
    if (result.error) {
        res.status(400).json({ message: result.error });
    } else {
        res.status(201).json(result); // 201 Created
    }
};

// PUT /authors/:id (Atualizar - Opcional, mas incluído para completude)
const updateAuthor = (req, res) => {
    const result = authorService.updateAuthor(req.params.id, req.body);
    if (result === null) {
        res.status(404).json({ message: "Autor não encontrado ou ID inválido." });
    } else if (result.error) {
        res.status(400).json({ message: result.error });
    } else {
        res.status(200).json(result); // 200 OK
    }
};

// DELETE /authors/:id (Opcional, mas incluído para completude)
const deleteAuthor = (req, res) => {
    const deleted = authorService.deleteAuthor(req.params.id);
    if (deleted) {
        res.status(204).send(); // 204 No Content
    } else {
        res.status(404).json({ message: "Autor não encontrado ou ID inválido." });
    }
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};
