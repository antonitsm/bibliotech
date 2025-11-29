const bookService = require('../services/book.service');

// Livros Controller (CRUD Completo)

// GET /books
const getAllBooks = (req, res) => {
    const books = bookService.getAllBooks();
    res.status(200).json(books);
};

// GET /books/:id
const getBookById = (req, res) => {
    const book = bookService.getBookById(req.params.id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: "Livro não encontrado." });
    }
};

// POST /books (Criar)
const createBook = (req, res) => {
    const result = bookService.createBook(req.body);
    if (result.error) {
        res.status(400).json({ message: result.error });
    } else {
        res.status(201).json(result); // 201 Created
    }
};

// PUT /books/:id (Atualizar - Substituição completa)
const updateBook = (req, res) => {
    const result = bookService.updateBook(req.params.id, req.body);
    if (result === null) {
        res.status(404).json({ message: "Livro não encontrado ou ID inválido." });
    } else if (result.error) {
        res.status(400).json({ message: result.error });
    } else {
        res.status(200).json(result); // 200 OK
    }
};

// DELETE /books/:id
const deleteBook = (req, res) => {
    const deleted = bookService.deleteBook(req.params.id);
    if (deleted) {
        res.status(204).send(); // 204 No Content
    } else {
        res.status(404).json({ message: "Livro não encontrado ou ID inválido." });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
