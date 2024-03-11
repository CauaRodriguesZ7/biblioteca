import { GeneroLivro } from "./GeneroLivro";
import { livro } from "./Livro";
import { StatusLivro } from "./StatusLivro";

//Criação de livros para biblioteca --
const livro1 = new livro("titulo1", "fulano autor", GeneroLivro.DRAMA, StatusLivro.DISPONIVEL);
const livro2 = new livro("titulo2", "beltrano autor", GeneroLivro.ROMANCE, StatusLivro.EMPRESTADO);
const livro3 = new livro("titulo3", "ciclano autor", GeneroLivro.FANTASIA, StatusLivro.ATRASADO);





// Cria biblioteca
const biblioteca = { livro1, livro2, livro3 }
// Exibe toda biblioteca
//console.log(biblioteca);
 
// Exibe conforme seu status
    if(livro2.getStatus() == "Disponivel para Emprestimo"){
        console.log(livro2);
    }else if (livro2.getStatus() == "Livro ja emprestado") {
        console.log(livro2);
    }else if(livro2.getStatus() == "Livro reservado"){
        console.log(livro2);
    }else if(livro2.getStatus() == "Nao devolvido dentro do prazo"){
        console.log(livro2)
    }else{
        console.log("Não encontrato");
    }