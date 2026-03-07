//Habilita terminal Node
const readline = require('readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   
//Entrada de informações do usuário
    rl.question('Insira a base do triângulo: ', (base) => {
        rl.question('Insira a altura do triângulo: ', (alt) => {
        let area = Number(alt) * Number(base) / 2;
        console.log(`A área do triângulo com altura de ${alt} e base ${base} é de ${area}`);
        rl.close();
    });
})