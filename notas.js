


let score = 100

function getScore(score) {



let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60

let scoreFinal;


if (scoreA) {
    scoreFinal = "A"
}
else if (scoreB) {
    scoreFinal = "B"
}
else if (scoreC) {
    scoreFinal = "C"
}
else if (scoreD) {
    scoreFinal = "D"
}
else if (scoreF) {
    scoreFinal = "F" 
}

else {
    scoreFinal = "Nota invalida"
}

return (scoreFinal)

}

console. log(getScore(200))
console. log(getScore(101))
console. log(getScore(4))
console. log(getScore(60))
console. log(getScore(75))
console. log(getScore(82))
console. log(getScore(90))
console. log(getScore(55))
console. log(getScore(100))
console. log(getScore(0))



