// Simulação de banco de dados local (Mock Local)

let authors = [
    { id: 1, name: "Clarice Lispector", bio: "Escritora e jornalista brasileira." },
    { id: 2, name: "Gabriel García Márquez", bio: "Escritor, jornalista, editor e ativista político colombiano." },
    { id: 3, name: "George Orwell", bio: "Escritor, jornalista e ensaísta britânico." }
];

let books = [
    { id: 101, title: "A Hora da Estrela", authorId: 1, publicationYear: 1977, isbn: "978-8532507512" },
    { id: 102, title: "Cem Anos de Solidão", authorId: 2, publicationYear: 1967, isbn: "978-8535910631" },
    { id: 103, title: "1984", authorId: 3, publicationYear: 1949, isbn: "978-8535914844" },
    { id: 104, title: "O Livro dos Prazeres", authorId: 1, publicationYear: 1969, isbn: "978-8532507529" }
];

let nextAuthorId = 4;
let nextBookId = 105;

// Funções de acesso aos dados (simulando um repositório/DAO)

// --- Livros (CRUD Completo) ---

const getAllBooks = () => books;

const getBookById = (id) => books.find(book => book.id === id);

const createBook = (bookData) => {
    const newBook = { id: nextBookId++, ...bookData };
    books.push(newBook);
    return newBook;
};

const updateBook = (id, bookData) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        // PUT (Atualizar): Substitui o objeto inteiro
        books[index] = { id, ...bookData };
        return books[index];
    }
    return null;
};

const deleteBook = (id) => {
    const initialLength = books.length;
    books = books.filter(book => book.id !== id);
    return books.length < initialLength; // Retorna true se um livro foi removido
};

// --- Autores (CRUD Simples) ---

const getAllAuthors = () => authors;

const getAuthorById = (id) => authors.find(author => author.id === id);

const createAuthor = (authorData) => {
    const newAuthor = { id: nextAuthorId++, ...authorData };
    authors.push(newAuthor);
    return newAuthor;
};

// CRUD simples: Apenas leitura e criação. O usuário pediu um CRUD simples, vou manter a atualização e exclusão para fins de demonstração, mas o foco do exercício é Livros.
// Vou incluir a função de atualização e exclusão de autor, mas o foco do exercício é Livros.

const updateAuthor = (id, authorData) => {
    const index = authors.findIndex(author => author.id === id);
    if (index !== -1) {
        authors[index] = { id, ...authors[index], ...authorData };
        return authors[index];
    }
    return null;
};

const deleteAuthor = (id) => {
    const initialLength = authors.length;
    books = books.filter(book => book.authorId !== id); // Remove livros do autor
    authors = authors.filter(author => author.id !== id);
    return authors.length < initialLength;
};


module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};
