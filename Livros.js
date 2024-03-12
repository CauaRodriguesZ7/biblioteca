"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livros = void 0;
var Livros = /** @class */ (function () {
    function Livros(titulo, autor, genero, status) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero; // array vazio
        this.status = status; //array vazio
    }
    Livros.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livros.prototype.getAutor = function () {
        return this.autor;
    };
    Livros.prototype.getGenero = function () {
        return this.genero;
    };
    Livros.prototype.getStatus = function () {
        return this.status;
    };
    Livros.prototype.setStatus = function (value) {
        this.status = value;
    };
    return Livros;
}());
exports.Livros = Livros;
