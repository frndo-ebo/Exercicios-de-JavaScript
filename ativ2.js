// Ativar interação com terminal
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cálculo de salário

//Entrada de informações do usuário

rl.question('Insira o salário base de seu funcionário: ', (entrada) => {
    rl.question('Insira o valor das vendas de seu funcionário: ', (entrada2) => {
        
//Definição de variáveis

        let salario_base = Number(entrada);
        let vendas = Number(entrada2);
        let bonus = 0
        let salario_novo = 0

        // Estrutura de decisão
        if (vendas >= 3000) {
            bonus = (salario_base * 10/100);
            salario_novo = (salario_base + bonus);
            console.log(`O funcionário ganhou um bônus de 10% sobre o salário de ${salario_base} reais e agora irá ganhar ${salario_novo} reais.`);
        } else {
            console.log(`O funcionário continuará recebendo ${salario_base} reais`);
        }
        
        rl.close()
    });
});