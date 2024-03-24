
// Base de livros
import { Usuario } from "./Usuario";
import { Livros } from "./Livros";
import { StatusLivro } from "./StatusLivro";
import { GeneroLivro } from "./GeneroLivro";

//Arrays vazios para funcionar como os "banco de dados"
export class BaseBiblioteca {
    listaDeLivros: Livros [];
    listaDeUsuarios: Usuario [];

    constructor(listaDeLivros: Livros[], listaDeUsuarios: Usuario[]) {
        this.listaDeLivros = listaDeLivros;
        this.listaDeUsuarios = listaDeUsuarios;
  }

  //Listando e gerando usuario cadastrado
  protected geradorUsuario(usuario: Usuario): boolean {
    let gerador: boolean = false
    for (let usuarioCadastrado of this.listaDeUsuarios) {
      if (usuarioCadastrado.getNome() === usuario.getNome()) {
        gerador = true
      }
    }
    return gerador
  }

//   listar livros disponiveis
listaDeLivrosDisponiveis(): string {
    let listaLivros: string = "Livros disponiveis para emprestimo: ";
    for (let livro of this.listaDeLivros) {
      if (livro.getStatus() === StatusLivro.DISPONIVEL) { // comando IF verifica o status do livro
        listaLivros += `${livro.getTitulo()}, `;
      }
    }
    if (listaLivros === "Livros disponiveis para emprestimo: ") {
      return "Nenhum livro disponivel no momento.";
    } else return listaLivros;
  }

  listaDeLivrosEmprestados(): string {
    let listaLivros: string = "Lista de livros emprestados: ";
    for (let livro of this.listaDeLivros) {
      if (livro.getStatus() === StatusLivro.EMPRESTADO) { // comando IF verifica o status do livro
        listaLivros += `${livro.getTitulo()}, `;
      }
    }
    if (listaLivros === "Lista de livros emprestados: ") { 
      return "Nenhum livro emprestado no momento.";
    } else return listaLivros;
  }

  // Lista livros por genero
  livrosDrama(): string {
    let listaLivros: string = "Drama";
    for (let livro of this.listaDeLivros) {
      if (livro.getGenero() === GeneroLivro.DRAMA) { // comando IF verifica o status do livro
        listaLivros += `${livro.getTitulo()}, `;
      }
    }
     return listaLivros;
  }

}

