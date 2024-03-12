"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusLivro = void 0;
//status de cada livro
var StatusLivro;
(function (StatusLivro) {
    StatusLivro["DISPONIVEL"] = "Disponivel para Emprestimo";
    StatusLivro["EMPRESTADO"] = "Livro ja emprestado";
    StatusLivro["ATRASADO"] = "Nao devolvido dentro do prazo";
    StatusLivro["RESERVADO"] = "Livro reservado";
})(StatusLivro || (exports.StatusLivro = StatusLivro = {}));
