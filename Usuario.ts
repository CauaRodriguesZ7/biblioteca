import { GeneroUsuario } from "./GeneroUsuario"
import { StatusLivro } from "./StatusLivro"


//classe para criar atributos do usuario
export class Usuario {
    private nome: string
    private cpf: string
    private livrosEmprestados: StatusLivro[]
    private livrosReservados: StatusLivro[]
    private historicoEmprestimo: StatusLivro[]
    private multa: number

    constructor(nome:string, cpf: string, livrosEmprestados: StatusLivro[], livrosReservados: StatusLivro[], historicoEmprestimo: StatusLivro[], multa: number) {
        this.nome = nome
        this.cpf = cpf
        this.livrosEmprestados = livrosEmprestados
        this.livrosReservados = livrosReservados
        this.historicoEmprestimo = historicoEmprestimo
        this.multa = multa
    }


    //Retornando os atributos do usuario
    getNome(): string {
        return this.nome
    }
    getCpf(): string {
        return this.cpf
    }
    //Retornando status dos livros 
    getLivrosEmprestados(): StatusLivro[] {
        return this.livrosEmprestados
    }
    setLivrosEmprestados(value: StatusLivro[]) {
        this.livrosEmprestados = value
    }
    getLivrosReservados(): StatusLivro[] {
        return this.livrosReservados
    }
    setLivrosReservados(value: StatusLivro[]) {
        this.livrosReservados = value
    }
    getHistoricoEmprestimo(): StatusLivro[] {
        return this.historicoEmprestimo
    }
    setHistoricoEmprestimo(value: StatusLivro[]) {
        this.historicoEmprestimo = value
    }
    // Retornando a multa 
    getMulta(): number {
        return this.multa
    }
    setMulta(value: number) {
        this.multa = value
    }
}

// export const Usuario: Array<object> = [
//     { id: 1, nome: "caua", genero: GeneroUsuario.MASCULINO, cpf: "45756756"},
//     { id: 2, nome: "Mathias", genero: GeneroUsuario.MASCULINO, cpf: "39937354"},
//     { id: 3, nome: "Julia", genero: GeneroUsuario.FEMININO, cpf: "563899735"},
//     { id: 4, nome: "Vitoria", genero: GeneroUsuario.FEMININO, cpf: "17263097"}               
// ]
