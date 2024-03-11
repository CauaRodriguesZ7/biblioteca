"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livro = void 0;
var livro = /** @class */ (function () {
    function livro(titulo, autor, genero, status) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.status = status;
    }
    livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    livro.prototype.getAutor = function () {
        return this.autor;
    };
    livro.prototype.getGenero = function () {
        return this.genero;
    };
    livro.prototype.getStatus = function () {
        return this.status;
    };
    livro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    livro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    livro.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    livro.prototype.setStatus = function (status) {
        this.status = status;
    };
    return livro;
}());
exports.livro = livro;
