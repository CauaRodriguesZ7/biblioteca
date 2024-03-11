"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.biblioteca = void 0;
// Base de livros
var GeneroLivro_1 = require("./GeneroLivro");
var StatusLivro_1 = require("./StatusLivro");
exports.biblioteca = [
    { id: 1, titulo: "teste", genero: GeneroLivro_1.GeneroLivro.DRAMA, status: StatusLivro_1.StatusLivro.ATRASADO, },
    { id: 2, titulo: "teste2", genero: GeneroLivro_1.GeneroLivro.FANTASIA, status: StatusLivro_1.StatusLivro.DISPONIVEL },
    { id: 3, titulo: "teste3", genero: GeneroLivro_1.GeneroLivro.FICCAO, status: StatusLivro_1.StatusLivro.DISPONIVEL },
    { id: 4, titulo: "teste4", genero: GeneroLivro_1.GeneroLivro.ROMANCE, status: StatusLivro_1.StatusLivro.EMPRESTADO },
    { id: 5, titulo: "teste5", genero: GeneroLivro_1.GeneroLivro.ROMANCE, status: StatusLivro_1.StatusLivro.RESERVADO },
    { id: 6, titulo: "titulo 6", genero: GeneroLivro_1.GeneroLivro.ROMANCE, status: StatusLivro_1.StatusLivro.EMPRESTADO }
];
