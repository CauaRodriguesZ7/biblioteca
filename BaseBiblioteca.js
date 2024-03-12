"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livro7 = exports.livro6 = exports.livro5 = exports.livro4 = exports.livro3 = exports.livro2 = exports.livro1 = void 0;
// Base de livros
var GeneroLivro_1 = require("./GeneroLivro");
var StatusLivro_1 = require("./StatusLivro");
//cadastro de livros da biblioteca
exports.livro1 = { id: 1, titulo: "livro1", genero: GeneroLivro_1.GeneroLivro.DRAMA, status: StatusLivro_1.StatusLivro.DISPONIVEL, atraso: 0 };
exports.livro2 = { id: 2, titulo: "livro2", genero: GeneroLivro_1.GeneroLivro.DRAMA, status: StatusLivro_1.StatusLivro.DISPONIVEL, atraso: 0 };
exports.livro3 = { id: 3, titulo: "livro3", genero: GeneroLivro_1.GeneroLivro.DRAMA, status: StatusLivro_1.StatusLivro.EMPRESTADO, atraso: 0 };
exports.livro4 = { id: 4, titulo: "livro4", genero: GeneroLivro_1.GeneroLivro.DRAMA, status: StatusLivro_1.StatusLivro.ATRASADO, atraso: 1 };
exports.livro5 = { id: 5, titulo: "livro4", genero: GeneroLivro_1.GeneroLivro.DRAMA, status: StatusLivro_1.StatusLivro.ATRASADO, atraso: 2 };
exports.livro6 = { id: 6, titulo: "livro4", genero: GeneroLivro_1.GeneroLivro.DRAMA, status: StatusLivro_1.StatusLivro.ATRASADO, atraso: 5 };
exports.livro7 = { id: 7, titulo: "livro4", genero: GeneroLivro_1.GeneroLivro.DRAMA, status: StatusLivro_1.StatusLivro.ATRASADO, atraso: 10 };
