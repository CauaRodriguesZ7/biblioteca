
Conversation opened. 1 read message.

Skip to content
Using Gmail with screen readers
in:sent 
Enable desktop notifications for Gmail.
   OK  No thanks
23 of 35
TRABALHO

Cauã Rodrigues <rodrigzs.soare@gmail.com>
Attachments
Wed, Oct 4, 2023, 10:25 PM
to celteixeira

 One attachment
  •  Scanned by Gmail
console.log(); //limpar console
const readilne = require("readline-sync"); //leitura de dados 

//declarar variaveis
let voto1 = 1;
let voto2 = 2;
let voto3 = 3;
let voto4 = 4;
let votoEmBranco = 0;
let anulado = 0;
let totalVotos = 0;
let numeroMagico = 999888;
let votando = true;
let status = 1;
let porCiclano = 0;
let porBeltrano = 0;
let porFulano = 0;
let porAlano = 0;


let confirma = 0;
//totalizadores
let totalVotosCiclano = 0;
let totalVotosBeltrano = 0;
let totalVotosFulano = 0;
let totalVotosAlano = 0;
let totalVotosBranco = 0


while(votando == true){
    console.clear();
console.log(
    "--------------------------------------------------------\n"+
    "| ********** ---- VOTO SINDICO 2023 ---- ***********   |\n"+
    "| **** ESCOLHA SEU CANDIDATO DIGITANDO O NUMERO ****   |\n"+
    "| 1. Ciclano Bezerra                                   |\n"+
    "| 2. Beltrano Souza                                    |\n"+
    "| 3. Fulano Amaral                                     |\n"+
    "| 4. Alano Cezar                                       |\n"+
    "| 5. Voto em Branco                                    |\n"+
    "| 6. Anular Voto                                       |\n"+
    "--------------------------------------------------------\n"
    );
    
    let candidato = readilne.questionInt("Qual é seu voto:"); //obtendo voto do usuario 
    console.log("Candidato numero: " + candidato);

 switch(candidato){ 
    case 1:
    console.log("Você votou no Ciclano Bezerra.");
    totalVotosCiclano++;
    confirma = readilne.question("Digite qualquer tecla para confirmar o seu voto!");
    break;

    case 2:
        console.log("Beltrano Souza.");
        totalVotosBeltrano++;
        confirma = readilne.question("Digite qualquer tecla para confirmar seu voto!");
        break;

        case 3:
            console.log("Fulano Amaral.");
            totalVotosFulano++;
            confirma = readilne.question("Digite qualquer tecla para confirmar seu voto!");
            break;

            case 4:
                console.log("Alano Cezar.");
                totalVotosAlano++;
                confirma = readilne.question("Digite qualquer tecla para confirmar seu voto!");
                break;

                case 5:
                    console.log("branco");
                    totalVotosBranco++;
                    confirma = readilne.question("digite qualquer tecla para confirmar!")
                    break;

                case 999888: //senha para finalizar votacao
                    votando = false;
                    console.log("Ciclano Bezerra recebeu: " + totalVotosCiclano);
                    console.log("Beltrano Souza: " + totalVotosBeltrano);
                    console.log("Fulano Amaral: " + totalVotosFulano);
                    console.log("Alano Cezar: " + totalVotosAlano);

                    //soma total dos votos
                    totalVotos = totalVotosCiclano + totalVotosBeltrano + totalVotosFulano + totalVotosAlano;

                    //calcula porcentagem
                    porCiclano = (totalVotosCiclano / totalVotos) * 100
                   // console.log(porCiclano + " porcento");
                    porBeltrano = (totalVotosBeltrano / totalVotos) * 100
                   // console.log(porBeltrano + " porcento");
                    porFulano = (totalVotosFulano / totalVotos) * 100
                  //  console.log(porFulano + " porcento" );
                    porAlano = (totalVotosAlano / totalVotos) * 100
                  //  console.log(porAlano + " porcento");
                   
                   //verifica ganhador
                    if(totalVotosCiclano > totalVotosBeltrano && totalVotosCiclano > totalVotosFulano && totalVotosCiclano > totalVotosAlano){
                        console.log("Ciclano Bezerra venceu com " + porCiclano + "% dos votos")
                   
                    }else if(totalVotosBeltrano > totalVotosCiclano && totalVotosBeltrano > totalVotosFulano && totalVotosBeltrano > totalVotosAlano ){
                        console.log("Beltrano Souza venceu com " + porBeltrano + "% dos votos")
                    
                    }else if(totalVotosFulano > totalVotosCiclano && totalVotosFulano > totalVotosBeltrano && totalVotosFulano > totalVotosAlano){
                        console.log("Fulano Amaral venceu com " + porFulano + "% dos votos")

                    }else if(totalVotosAlano >totalVotosCiclano && totalVotosAlano > totalVotosBeltrano && totalVotosAlano > totalVotosFulano){
                        console.log("Alano Cezar venceu com " + porAlano + "% dos votos")
                    }


                    
     }
 }
desafio (1).txt
Displaying desafio (1).txt.