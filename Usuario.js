"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, cpf, livrosEmprestados, livrosReservados, historicoEmprestimo, multa) {
        this.nome = nome;
        this.cpf = cpf;
        this.livrosEmprestados = livrosEmprestados;
        this.livrosReservados = livrosReservados;
        this.historicoEmprestimo = historicoEmprestimo;
        this.multa = multa;
    }
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.getCpf = function () {
        return this.cpf;
    };
    Usuario.prototype.getLivrosEmprestados = function () {
        return this.livrosEmprestados;
    };
    Usuario.prototype.setLivrosEmprestados = function (value) {
        this.livrosEmprestados = value;
    };
    Usuario.prototype.getLivrosReservados = function () {
        return this.livrosReservados;
    };
    Usuario.prototype.setLivrosReservados = function (value) {
        this.livrosReservados = value;
    };
    Usuario.prototype.getHistoricoEmprestimo = function () {
        return this.historicoEmprestimo;
    };
    Usuario.prototype.setHistoricoEmprestimo = function (value) {
        this.historicoEmprestimo = value;
    };
    Usuario.prototype.getMulta = function () {
        return this.multa;
    };
    Usuario.prototype.setMulta = function (value) {
        this.multa = value;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
// export const Usuario: Array<object> = [
//     { id: 1, nome: "caua", genero: GeneroUsuario.MASCULINO, cpf: "45756756"},
//     { id: 2, nome: "Mathias", genero: GeneroUsuario.MASCULINO, cpf: "39937354"},
//     { id: 3, nome: "Julia", genero: GeneroUsuario.FEMININO, cpf: "563899735"},
//     { id: 4, nome: "Vitoria", genero: GeneroUsuario.FEMININO, cpf: "17263097"}               
// ]
