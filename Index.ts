import { livro1, livro2, livro3, livro4, livro5, livro6, livro7 } from "./BaseBiblioteca";



const livros = [livro1, livro2, livro3, livro4, livro5, livro6, livro7];
const valorMultaDiaria = 1;


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


