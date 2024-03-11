"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseBiblioteca_1 = require("./BaseBiblioteca");
var livros = [BaseBiblioteca_1.livro1, BaseBiblioteca_1.livro2, BaseBiblioteca_1.livro3, BaseBiblioteca_1.livro4, BaseBiblioteca_1.livro5, BaseBiblioteca_1.livro6, BaseBiblioteca_1.livro7];
var valorMultaDiaria = 1;
// Livros disponiveis
console.log("-------DISPONIVEL----------------");
livros.forEach(function (value) {
    if (value.status == "Disponivel para Emprestimo") {
        console.log("Titulo: ", value.titulo);
        console.log("Status: ", value.status);
        console.log("-----------------------------------");
    }
});
// Livros Emprestados
console.log("---EMPRESTADO------------");
livros.forEach(function (value) {
    if (value.status == "Livro ja emprestado") {
        console.log("Titulo: ", value.titulo);
        console.log("Status: ", value.status);
        console.log("-----------------------------------");
    }
});
// Livros Reservados
console.log("---RESERVADO------------");
livros.forEach(function (value) {
    if (value.status == "Livro reservado") {
        console.log("Titulo: ", value.titulo);
        console.log("Status: ", value.status);
        console.log("-----------------------------------");
    }
});
// Livros atrasados/Multa do atraso
console.log("---ATRASADO------------");
livros.forEach(function (value) {
    if (value.status == "Nao devolvido dentro do prazo") {
        var totalMulta = valorMultaDiaria * value.atraso;
        console.log("Titulo: ", value.titulo);
        console.log("Status: ", value.status);
        console.log("Valor da multa: ".concat(value.atraso, " reais"));
        console.log("-----------------------------------");
    }
});
