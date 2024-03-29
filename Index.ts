import { GeneroLivro } from "./GeneroLivro";
import { Livros } from "./Livros";
import { StatusLivro } from "./StatusLivro";
import { Usuario } from "./Usuario";
import { BaseBiblioteca } from "./BaseBiblioteca";

//Criando usuario e seus atributos e arrays da classe usuario
const usuario1 = new Usuario("Caua", "012.164.379-31", [], [], [], 0)
const usuario2 = new Usuario("andre", "012.111.000-31", [], [], [], 0)
//console.log(usuario1, usuario2);

//criando livros com  os parametros da classe livro
const livro1 = new Livros("Livro 1", "autor 1", GeneroLivro.DRAMA, StatusLivro.DISPONIVEL)
const livro2 = new Livros("Livro 2", "autor 2", GeneroLivro.ROMANCE, StatusLivro.DISPONIVEL)
const livro3 = new Livros("Livrov3", "autor 3", GeneroLivro.FICCAO, StatusLivro.DISPONIVEL)
const livro4 = new Livros("Livro 4", "autor 4", GeneroLivro.FANTASIA, StatusLivro.ATRASADO)
const livro5 = new Livros("Livro 5", "autor 5", GeneroLivro.DRAMA, StatusLivro.EMPRESTADO)
const livro6 = new Livros("Livro 6", "autor 6", GeneroLivro.ROMANCE, StatusLivro.RESERVADO)
//console.log(livro1, livro2, livro3, livro4, livro5, livro6)


const biblioteca = new BaseBiblioteca( [livro1, livro2, livro3, livro4, livro5, livro6], [usuario1, usuario2])
// console.log(biblioteca.listaDeLivrosDisponiveis());
//console.log(biblioteca.listaDeLivrosEmprestados());


console.log(biblioteca.livrosDrama())