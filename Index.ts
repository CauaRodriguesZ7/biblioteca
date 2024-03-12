import { GeneroLivro } from "./GeneroLivro";
import { Livros } from "./Livros";
import { StatusLivro } from "./StatusLivro";
import { Usuario } from "./Usuario";

//Criação de livros para biblioteca --
// const livro1 = new livro("titulo1", "fulano autor", GeneroLivro.DRAMA, StatusLivro.DISPONIVEL);
// const livro2 = new livro("titulo2", "beltrano autor", GeneroLivro.ROMANCE, StatusLivro.EMPRESTADO);
// const livro3 = new livro("titulo3", "ciclano autor", GeneroLivro.FANTASIA, StatusLivro.ATRASADO);

const usuario1 = new Usuario("Caua", "012.164.379-31", [], [], [], 0)
const usuario2 = new Usuario("andre", "012.111.000-31", [], [], [], 0)
console.log(usuario1, usuario2);

const livro1 = new Livros("Livro1", "autor1", GeneroLivro.DRAMA, StatusLivro.DISPONIVEL)
console.log(livro1)




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
