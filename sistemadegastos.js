

let familia = {
    receitas: [20000, 300, 4000],
    despesas: [1500, 3000, 400, 100]
}

function soma(array) {
    let total =0;

    for(let value of array){
        total += value;
    }

    return total
}

function calcularBalanco() {
const calcularReceitas = soma(familia.receitas)
const calcularDespesas = soma(familia.despesas)

const total = calcularReceitas - calcularDespesas

const saldopositivo = total >= 0


let balancoText = " negativo"

if (saldopositivo) { 

balancoText = "positivo"
}
console.log(`Seu saldo é ${balancoText}: ${total}`)
}

calcularBalanco()


