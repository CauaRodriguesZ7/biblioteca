"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importando todos os livros separadamente
var BaseBiblioteca_1 = require("./BaseBiblioteca");
var Usuario_1 = require("./Usuario");
// array de usuarios
var usurios = [Usuario_1.usuario1, Usuario_1.usuario2, Usuario_1.usuario3];
//array com todos livros juntos
var livros = [BaseBiblioteca_1.livro1, BaseBiblioteca_1.livro2, BaseBiblioteca_1.livro3, BaseBiblioteca_1.livro4, BaseBiblioteca_1.livro5, BaseBiblioteca_1.livro6, BaseBiblioteca_1.livro7];
// Valor padrão da multa
var valorMultaDiaria = 1;
console.log("-------Listagem dos livros----------------");
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
console.log("----Lista de Usuários---------");
usurios.forEach(function (value) {
    console.log("Nome:", value.nome);
    console.log("CPF:", value.cpf);
    console.log("Gênero:", value.genero);
    console.log("------------------------------");
});
