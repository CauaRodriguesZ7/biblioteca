"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { biblioteca } from "./BaseBiblioteca";
var GeneroLivro_1 = require("./GeneroLivro");
var Livro_1 = require("./Livro");
var StatusLivro_1 = require("./StatusLivro");
//Criação de livros para biblioteca --
var livro1 = new Livro_1.livro("titulo1", "fulano autor", GeneroLivro_1.GeneroLivro.DRAMA, StatusLivro_1.StatusLivro.DISPONIVEL);
var livro2 = new Livro_1.livro("titulo2", "beltrano autor", GeneroLivro_1.GeneroLivro.ROMANCE, StatusLivro_1.StatusLivro.EMPRESTADO);
var livro3 = new Livro_1.livro("titulo3", "ciclano autor", GeneroLivro_1.GeneroLivro.FANTASIA, StatusLivro_1.StatusLivro.ATRASADO);
// Cria biblioteca
var biblioteca = { livro1: livro1, livro2: livro2, livro3: livro3 };
// Exibe toda biblioteca
//console.log(biblioteca);
// Exibe conforme seu status
if (livro2.getStatus() == "Disponivel para Emprestimo") {
    console.log(livro2);
}
else if (livro2.getStatus() == "Livro ja emprestado") {
    console.log(livro2);
}
else if (livro2.getStatus() == "Livro reservado") {
    console.log(livro2);
}
else if (livro2.getStatus() == "Nao devolvido dentro do prazo") {
    console.log(livro2);
}
else {
    console.log("Não encontrato");
}
