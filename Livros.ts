import { GeneroLivro } from "./GeneroLivro";
import { StatusLivro} from "./StatusLivro";

// Atributos dos livros 
export class Livros {
    private titulo: string
    private autor: string
    private genero: GeneroLivro
    private status: StatusLivro

    constructor(titulo: string, autor: string, genero: GeneroLivro, status: StatusLivro) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero // array vazio
        this.status = status //array vazio
    }

    //Retornando atributos
    getTitulo(): string {
        return this.titulo
    }
    getAutor(): string {
        return this.autor
    }
    getGenero(): GeneroLivro {
        return this.genero
    }
    getStatus(): StatusLivro {
        return this.status
    }
    setStatus(value: StatusLivro) {
        this.status = value
    }
}
