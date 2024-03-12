"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeneroLivro_1 = require("./GeneroLivro");
var Livros_1 = require("./Livros");
var StatusLivro_1 = require("./StatusLivro");
var Usuario_1 = require("./Usuario");
//Criação de livros para biblioteca --
// const livro1 = new livro("titulo1", "fulano autor", GeneroLivro.DRAMA, StatusLivro.DISPONIVEL);
// const livro2 = new livro("titulo2", "beltrano autor", GeneroLivro.ROMANCE, StatusLivro.EMPRESTADO);
// const livro3 = new livro("titulo3", "ciclano autor", GeneroLivro.FANTASIA, StatusLivro.ATRASADO);
var usuario1 = new Usuario_1.Usuario("Caua", "012.164.379-31", [], [], [], 0);
var usuario2 = new Usuario_1.Usuario("andre", "012.111.000-31", [], [], [], 0);
console.log(usuario1, usuario2);
var livro1 = new Livros_1.Livros("Livro 1", "autor 1", GeneroLivro_1.GeneroLivro.DRAMA, StatusLivro_1.StatusLivro.DISPONIVEL);
var livro2 = new Livros_1.Livros("Livro 2", "autor 2", GeneroLivro_1.GeneroLivro.ROMANCE, StatusLivro_1.StatusLivro.DISPONIVEL);
var livro3 = new Livros_1.Livros("Livrov3", "autor 3", GeneroLivro_1.GeneroLivro.FICCAO, StatusLivro_1.StatusLivro.DISPONIVEL);
var livro4 = new Livros_1.Livros("Livro 4", "autor 4", GeneroLivro_1.GeneroLivro.FANTASIA, StatusLivro_1.StatusLivro.ATRASADO);
var livro5 = new Livros_1.Livros("Livro 5", "autor 5", GeneroLivro_1.GeneroLivro.DRAMA, StatusLivro_1.StatusLivro.EMPRESTADO);
var livro6 = new Livros_1.Livros("Livro 6", "autor 6", GeneroLivro_1.GeneroLivro.ROMANCE, StatusLivro_1.StatusLivro.RESERVADO);
console.log(livro1, livro2, livro3, livro4, livro5, livro6);
// Cria biblioteca
// const biblioteca = { livro1, livro2, livro3 }
// Exibe toda biblioteca
//console.log(biblioteca);
// Exibe conforme seu status
// if(livro2.getStatus() == "Disponivel para Emprestimo"){
//     console.log(livro2);
// }else if (livro2.getStatus() == "Livro ja emprestado") {
//     console.log(livro2);
// }else if(livro2.getStatus() == "Livro reservado"){
//     console.log(livro2);
// }else if(livro2.getStatus() == "Nao devolvido dentro do prazo"){
//     console.log(livro2)
// }else{
//     console.log("Não encontrato");
// }
