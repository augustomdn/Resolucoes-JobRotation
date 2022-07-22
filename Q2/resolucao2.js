let number = 8;
let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;


for (let i = 2; i <= number; i++) {
     fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];

     if (number == fibonacci[i]) {
        console.log("Pertence")
     } else {
        console.log("Não Pertence")
     }

}



console.log(fibonacci);

