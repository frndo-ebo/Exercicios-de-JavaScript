// Ativar interação com terminal
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada de informações
rl.question('Insira seu peso: ', (entrada) => {
    rl.question('Insira sua altura em metros: ', (entrada2) => {

// Definição de variáveis

        let peso = Number(entrada);
        let altura = Number(entrada2);
        let imc = peso / (altura * altura);

// Estrutura de decisão
        if (imc < 18.5) {
            console.log(`Abaixo do peso (IMC de ${imc})`);
        } else if (imc >= 18.5 && imc < 25) {
            console.log(`Peso normal (IMC de ${imc})`)
        } else if (imc >= 25 && imc < 30) {
            console.log(`Sobrepeso (IMC de ${imc})`)
        } else {
            console.log(`Obesidade (IMC de ${imc})`)
        }

        rl.close()
    });
});
