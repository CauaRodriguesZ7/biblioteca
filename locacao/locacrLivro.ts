
//importando arquivos para realizar locação
import { livro1, livro2, livro3, livro4, livro5, livro6, livro7 } from "../BaseBiblioteca";
import { usuario1, usuario2, usuario3 } from "../Usuario";

// locando um livro
const locacao =[livro3.id, livro3.titulo, usuario1.nome, livro3.status];
console.log(   locacao);