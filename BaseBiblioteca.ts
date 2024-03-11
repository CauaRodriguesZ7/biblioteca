
// Base de livros
import { GeneroLivro } from "./GeneroLivro";
import { StatusLivro } from "./StatusLivro";

export const biblioteca: Array<object> = [
    { id: 1, titulo: "teste", genero: GeneroLivro.DRAMA, status: StatusLivro.ATRASADO, },     
    { id: 2, titulo: "teste2", genero: GeneroLivro.FANTASIA, status: StatusLivro.DISPONIVEL },     
    { id: 3, titulo: "teste3", genero: GeneroLivro.FICCAO, status: StatusLivro.DISPONIVEL },     
    { id: 4, titulo: "teste4", genero: GeneroLivro.ROMANCE, status: StatusLivro.EMPRESTADO },     
    { id: 5, titulo: "teste5", genero: GeneroLivro.ROMANCE, status: StatusLivro.RESERVADO },    
    { id: 6, titulo: "titulo 6", genero: GeneroLivro.ROMANCE, status: StatusLivro.EMPRESTADO }     
    
  ]

    
