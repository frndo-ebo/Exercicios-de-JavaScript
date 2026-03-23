// Ativar interação com terminal
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Conversor de Celsius para Fahrenheit

// Entrada de informações
rl.question('Insira a temperatura em Celsius: ', (entrada) => {
    
// Criação de variáveis    
    let celsius = Number(entrada);
    let fah = (celsius * 9/5) + 32; 

// Saída de informações após cálculos no terminal
    console.log(`A temperatura de ${celsius}º graus Celsius em Fahrenheit é de: ${fah}.`);
    
    rl.close();
});