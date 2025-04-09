// Calculadora de Juros Simples
// J = P * i * n
/*
    J = juros;
    P = Valor presente, principal (capital);
    i = Taxa de juros; 0.03 = 3%;
    n = Número de períodos (meses);
    */

const valorPrincipal = 2000;
const taxaJuros = 0.03; // Igual a 3%
const numeroMeses = 12;

const jurosFinal = valorPrincipal * taxaJuros * numeroMeses;
console.log(`Juros no período de ${numeroMeses} meses é de ${jurosFinal} reais`);