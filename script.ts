let comprimento : number
comprimento = 6
let largura : number
largura = 2
console.log(QuebrarBarra(6,2))
function QuebrarBarra(barraUm:number, barraDois:number):number{
if (barraUm == 0 || barraDois == 0){
    return -1
}
let resultado : number = (barraUm * barraDois)- 1
return resultado
}


// console.log(AnalizarPalavra("CODigo"))
// function AnalizarPalavra(palavra:string):string{
//     let maiuscula : RegExp = /[A-Z]/g
//     let minuscula : RegExp = /[a-z]/g
//     let contadorMa : string[] | null = palavra.match(maiuscula)
//     let contadorMi : string[] | null = palavra.match(minuscula)
//     if(contadorMa.length > contadorMi.length){
//         return palavra.toUpperCase()
//     }else{
//         return palavra.toLowerCase()
//     }
// }

// class Lutador {
//     Nome: string
//     Vida: number
//     Ataque: number

//     constructor(nome: string, vida: number, ataque: number) {
//         this.Nome = nome
//         this.Vida = vida
//         this.Ataque = ataque
//     }
// }
// let lutadorUm:Lutador = new Lutador("Ale",600,100)
// let lutadorDois:Lutador = new Lutador("Fulano",500,80)

// console.log(Vencedor(lutadorUm,lutadorDois,lutadorDois))

// function Vencedor(lutadorUm:Lutador,lutadorDois:Lutador,lutadorAtaque):string | undefined{
//    let continuar : boolean = true
//    let vidaLutadorUm : number = lutadorUm.Vida
//    let vidaLutadorDois : number = lutadorDois.Vida
    
//    do{
//     vidaLutadorUm = vidaLutadorUm - lutadorAtaque.Ataque
//     console.log(vidaLutadorUm)
//     if(vidaLutadorUm <= 0){
//         return lutadorDois.Nome
//     }
//     vidaLutadorDois = vidaLutadorDois - lutadorUm.Ataque
//     console.log(vidaLutadorDois)
//     if(vidaLutadorDois <= 0){
//         return lutadorUm.Nome
//     }
//    }while(continuar)
// }