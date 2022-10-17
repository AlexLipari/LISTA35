// let comprimento : number
// comprimento = 2
// let largura : number
// largura = 1
// function QuebrarBarra(barraUm:number, barraDois:number):number{
// }
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
var Lutador = /** @class */ (function () {
    function Lutador(nome, vida, ataque) {
        this.Nome = nome;
        this.Vida = vida;
        this.Ataque = ataque;
    }
    return Lutador;
}());
var lutadorUm = new Lutador("Ale", 600, 100);
var lutadorDois = new Lutador("Fulano", 500, 80);
console.log(Vencedor(lutadorUm, lutadorDois, lutadorDois));
function Vencedor(lutadorUm, lutadorDois, lutadorAtaque) {
    var continuar = true;
    var vidaLutadorUm = lutadorUm.Vida;
    var vidaLutadorDois = lutadorDois.Vida;
    do {
        vidaLutadorUm = vidaLutadorUm - lutadorAtaque.Ataque;
        console.log(vidaLutadorUm);
        if (vidaLutadorUm <= 0) {
            return lutadorDois.Nome;
        }
        vidaLutadorDois = vidaLutadorDois - lutadorUm.Ataque;
        console.log(vidaLutadorDois);
        if (vidaLutadorDois <= 0) {
            return lutadorUm.Nome;
        }
    } while (continuar);
}
