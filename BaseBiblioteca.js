"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBiblioteca = void 0;
var StatusLivro_1 = require("./StatusLivro");
//Arrays vazios para funcionar como os "banco de dados"
var BaseBiblioteca = /** @class */ (function () {
    function BaseBiblioteca(listaDeLivros, listaDeUsuarios) {
        this.listaDeLivros = listaDeLivros;
        this.listaDeUsuarios = listaDeUsuarios;
    }
    //Listando e gerando usuario cadastrado
    BaseBiblioteca.prototype.geradorUsuario = function (usuario) {
        var gerador = false;
        for (var _i = 0, _a = this.listaDeUsuarios; _i < _a.length; _i++) {
            var usuarioCadastrado = _a[_i];
            if (usuarioCadastrado.getNome() === usuario.getNome()) {
                gerador = true;
            }
        }
        return gerador;
    };
    //   listar livros disponiveis
    BaseBiblioteca.prototype.listaDeLivrosDisponiveis = function () {
        var listaLivros = "Livros disponiveis para emprestimo: ";
        for (var _i = 0, _a = this.listaDeLivros; _i < _a.length; _i++) {
            var livro = _a[_i];
            if (livro.getStatus() === StatusLivro_1.StatusLivro.DISPONIVEL) {
                listaLivros += "".concat(livro.getTitulo(), ", ");
            }
        }
        if (listaLivros === "Livros disponiveis para emprestimo: ") {
            return "Nenhum livro disponivel no momento.";
        }
        else
            return listaLivros;
    };
    BaseBiblioteca.prototype.listaDeLivrosEmprestados = function () {
        var listaLivros = "Lista de livros emprestados: ";
        for (var _i = 0, _a = this.listaDeLivros; _i < _a.length; _i++) {
            var livro = _a[_i];
            if (livro.getStatus() === StatusLivro_1.StatusLivro.EMPRESTADO) {
                listaLivros += "".concat(livro.getTitulo(), ", ");
            }
        }
        if (listaLivros === "Lista de livros emprestados: ") {
            return "Nenhum livro emprestado no momento.";
        }
        else
            return listaLivros;
    };
    return BaseBiblioteca;
}());
exports.BaseBiblioteca = BaseBiblioteca;
