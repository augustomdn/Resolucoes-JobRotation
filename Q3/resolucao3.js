const jsonData = require('./dados.json');

let menorValor = maiorValor = jsonData[0].valor;

let total = 0;


for (let i = 0; i < jsonData.length; i++) {

    total = total + jsonData[i].valor;
    

    if (jsonData[i].valor < menorValor) {
        menorValor = jsonData[i].valor;
    } else if (jsonData[i].valor > maiorValor) {
        maiorValor = jsonData[i].valor;
    }
};


    let faturamentoDiario = 0;
    let media =  total / jsonData.length

for (let i = 0; i < jsonData.length; i++) {


    if (jsonData[i].valor > media) {

        faturamentoDiario++
        
    }
}



console.log("O menor valor é : " + menorValor);
console.log("O maior valor é : " + maiorValor);
console.log("A media é : " + total / jsonData.length);
console.log("O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de : " + faturamentoDiario )