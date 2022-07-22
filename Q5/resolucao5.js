const palavra = "Augusto Meireles do Nascimento";

function inverter(entrada) {

    let invertida = "";
    
        for (let i = entrada.length - 1; i >= 0; i --) {
        invertida = invertida + entrada[i];
    }

    return invertida;
}

console.log(inverter(palavra));




