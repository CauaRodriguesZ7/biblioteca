import { GeneroLivro } from "./GeneroLivro";
import { StatusLivro } from "./StatusLivro";

export class livro{
    private titulo: string;
    private autor: string;
    private genero: GeneroLivro;
    private status: StatusLivro;

    constructor(titulo: string, autor: string, genero: GeneroLivro, status: StatusLivro){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.status = status;
    }

    getTitulo(){
        return this.titulo;
    }
    getAutor(){
        return this.autor;
    }
    getGenero(){
        return this.genero;
    }
    getStatus(){
        return this.status;
    }

    setTitulo(titulo){
        this.titulo = titulo;
    }
    setAutor(autor){
        this.autor = autor;
    }
    setGenero(genero){
        this.genero = genero;
    }

    setStatus(status){
        this.status = status;
    }

}