// PRÁTICA 1

// const nota1 = 8;
// const nota2 = 7.5;

// const media = (nota1 + nota2) / 2
// console.log(media);
// if(media >= 7){
//     console.log("PARABÉNS, VOCÊ ESTÁ APROVADO!");
// } else {
//     console.log("VOCÊ ESTÁ REPROVADO, FAÇA O EXAME.");
// }

// PRÁTICA 2

const produtoValor = 300;
const freteGratis = false;

// VERDADEIRO (TRUE)

// if(produtoValor >= 1000 && freteGratis){
//     console.log("PARABÉNS VOCÊ TEM UM FRETE GRÁTIS NESTA COMPRA!");
// }

if(produtoValor >= 1000 || freteGratis){
    console.log("PARABÉNS VOCÊ TEM UM FRETE GRÁTIS NESTA COMPRA!");
} else {
    console.log("O FRETE FICOU: R$10");
}