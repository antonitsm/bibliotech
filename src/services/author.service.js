const db = require('./db');

// Lógica de Negócio para Autores (CRUD Simples)

const getAllAuthors = () => {
    return db.getAllAuthors();
};

const getAuthorById = (id) => {
    const authorId = parseInt(id);
    if (isNaN(authorId)) {
        return null; // ID inválido
    }
    return db.getAuthorById(authorId);
};

const createAuthor = (authorData) => {
    // Validação básica
    if (!authorData.name) {
        return { error: "Nome do autor é obrigatório." };
    }

    const newAuthor = db.createAuthor({
        name: authorData.name,
        bio: authorData.bio || null
    });

    return newAuthor;
};

// As funções de update e delete não são o foco, mas são incluídas para um CRUD completo
const updateAuthor = (id, authorData) => {
    const authorId = parseInt(id);
    if (isNaN(authorId)) {
        return null; // ID inválido
    }

    if (!authorData.name) {
        return { error: "Nome do autor é obrigatório." };
    }

    const updatedAuthor = db.updateAuthor(authorId, authorData);
    return updatedAuthor;
};

const deleteAuthor = (id) => {
    const authorId = parseInt(id);
    if (isNaN(authorId)) {
        return false; // ID inválido
    }
    return db.deleteAuthor(authorId);
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};
