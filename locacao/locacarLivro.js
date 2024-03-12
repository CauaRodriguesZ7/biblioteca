"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importando arquivos para realizar locação
var BaseBiblioteca_1 = require("../BaseBiblioteca");
var Usuario_1 = require("../Usuario");
// locando um livro
var locacao = [BaseBiblioteca_1.livro3.id, BaseBiblioteca_1.livro3.titulo, Usuario_1.usuario1.nome, BaseBiblioteca_1.livro3.status];
console.log(locacao);
