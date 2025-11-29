const db = require('./db');

// Lógica de Negócio para Livros

const getAllBooks = () => {
    return db.getAllBooks();
};

const getBookById = (id) => {
    const bookId = parseInt(id);
    if (isNaN(bookId)) {
        return null; // ID inválido
    }
    return db.getBookById(bookId);
};

const createBook = (bookData) => {
    // Validação básica
    if (!bookData.title || !bookData.authorId || !bookData.publicationYear) {
        return { error: "Dados incompletos para o livro." };
    }

    const authorId = parseInt(bookData.authorId);
    if (isNaN(authorId) || !db.getAuthorById(authorId)) {
        return { error: "ID de autor inválido ou autor não encontrado." };
    }

    const newBook = db.createBook({
        title: bookData.title,
        authorId: authorId,
        publicationYear: parseInt(bookData.publicationYear),
        isbn: bookData.isbn || null
    });

    return newBook;
};

const updateBook = (id, bookData) => {
    const bookId = parseInt(id);
    if (isNaN(bookId)) {
        return null; // ID inválido
    }

    // PUT (Atualizar): Requer todos os campos para substituição completa
    if (!bookData.title || !bookData.authorId || !bookData.publicationYear) {
        return { error: "Dados incompletos para a atualização (PUT requer todos os campos)." };
    }

    const authorId = parseInt(bookData.authorId);
    if (isNaN(authorId) || !db.getAuthorById(authorId)) {
        return { error: "ID de autor inválido ou autor não encontrado." };
    }

    const updatedBook = db.updateBook(bookId, {
        title: bookData.title,
        authorId: authorId,
        publicationYear: parseInt(bookData.publicationYear),
        isbn: bookData.isbn || null
    });

    return updatedBook;
};

const deleteBook = (id) => {
    const bookId = parseInt(id);
    if (isNaN(bookId)) {
        return false; // ID inválido
    }
    return db.deleteBook(bookId);
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
