"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeneroLivro_1 = require("./GeneroLivro");
var Livros_1 = require("./Livros");
var StatusLivro_1 = require("./StatusLivro");
var Usuario_1 = require("./Usuario");
var BaseBiblioteca_1 = require("./BaseBiblioteca");
//Criando usuario e seus atributos e arrays da classe usuario
var usuario1 = new Usuario_1.Usuario("Caua", "012.164.379-31", [], [], [], 0);
var usuario2 = new Usuario_1.Usuario("andre", "012.111.000-31", [], [], [], 0);
//console.log(usuario1, usuario2);
//criando livros com  os parametros da classe livro
var livro1 = new Livros_1.Livros("Livro 1", "autor 1", GeneroLivro_1.GeneroLivro.DRAMA, StatusLivro_1.StatusLivro.DISPONIVEL);
var livro2 = new Livros_1.Livros("Livro 2", "autor 2", GeneroLivro_1.GeneroLivro.ROMANCE, StatusLivro_1.StatusLivro.DISPONIVEL);
var livro3 = new Livros_1.Livros("Livrov3", "autor 3", GeneroLivro_1.GeneroLivro.FICCAO, StatusLivro_1.StatusLivro.DISPONIVEL);
var livro4 = new Livros_1.Livros("Livro 4", "autor 4", GeneroLivro_1.GeneroLivro.FANTASIA, StatusLivro_1.StatusLivro.ATRASADO);
var livro5 = new Livros_1.Livros("Livro 5", "autor 5", GeneroLivro_1.GeneroLivro.DRAMA, StatusLivro_1.StatusLivro.EMPRESTADO);
var livro6 = new Livros_1.Livros("Livro 6", "autor 6", GeneroLivro_1.GeneroLivro.ROMANCE, StatusLivro_1.StatusLivro.RESERVADO);
//console.log(livro1, livro2, livro3, livro4, livro5, livro6)
var biblioteca = new BaseBiblioteca_1.BaseBiblioteca([livro1, livro2, livro3, livro4, livro5, livro6], [usuario1, usuario2]);
// console.log(biblioteca.listaDeLivrosDisponiveis());
//console.log(biblioteca.listaDeLivrosEmprestados());
console.log(biblioteca.livrosDrama());
