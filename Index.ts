//importando todos os livros separadamente
import { livro1, livro2, livro3, livro4, livro5, livro6, livro7 } from "./BaseBiblioteca";
import { usuario1, usuario2, usuario3 } from "./Usuario"; 

// array de usuarios
const usurios = [usuario1, usuario2, usuario3];
//array com todos livros juntos
const livros = [livro1, livro2, livro3, livro4, livro5, livro6, livro7];
// Valor padrão da multa
const valorMultaDiaria = 1;

console.log("-------Listagem dos livros----------------") 
// Livros disponiveis
console.log("-------DISPONIVEL----------------") 
livros.forEach((value)=>{
    if(value.status == "Disponivel para Emprestimo" ){              
        console.log("Titulo: ", value.titulo);
        console.log("Status: ", value.status);        
        console.log("-----------------------------------")
     }   
});

// Livros Emprestados
console.log("---EMPRESTADO------------")        
livros.forEach((value)=>{
    if(value.status == "Livro ja emprestado" ){        
        console.log("Titulo: ", value.titulo);
        console.log("Status: ", value.status);        
        console.log("-----------------------------------")
     }   
});

// Livros Reservados
 console.log("---RESERVADO------------")       
livros.forEach((value)=>{
    if(value.status == "Livro reservado" ){        
        console.log("Titulo: ", value.titulo);
        console.log("Status: ", value.status);        
        console.log("-----------------------------------")
     }   
});

// Livros atrasados/Multa do atraso
console.log("---ATRASADO------------") 
livros.forEach((value)=>{
    if(value.status == "Nao devolvido dentro do prazo" ){
        let totalMulta = valorMultaDiaria * value.atraso        
        console.log("Titulo: ", value.titulo);
        console.log("Status: ", value.status);
        console.log(`Valor da multa: ${value.atraso} reais`);        
        console.log("-----------------------------------")
     }   
});

console.log("----Lista de Usuários---------")
usurios.forEach((value) =>{    
    console.log("Nome:", value.nome)
    console.log("CPF:", value.cpf)
    console.log("Gênero:", value.genero)
    console.log("------------------------------")
})


