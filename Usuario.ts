import { GeneroUsuario } from "./GeneroUsuario"
import { StatusLivro } from "./StatusLivro"

<<<<<<< HEAD
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

    getNome(): string {
        return this.nome
    }
    getCpf(): string {
        return this.cpf
    }
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
=======
//criação de usuarios
export const usuario1 = { id: 1, nome: "caua",      genero: GeneroUsuario.MASCULINO, cpf: "45756756"}
export const usuario2 = { id: 2, nome: "mixolidia", genero: GeneroUsuario.FEMININO,  cpf: "45756756"}
export const usuario3 = { id: 3, nome: "juilia",    genero: GeneroUsuario.FEMININO,  cpf: "45756756"}
>>>>>>> 4d5dd2c7b1da38faec9bdaf302a6162463a1146e
