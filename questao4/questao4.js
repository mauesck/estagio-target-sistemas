// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

const total = sp + rj + mg + es + outros;

console.log('Valor total mensal da distribuidora: ', total);

const percentualSP = (sp / total) * 100;
const percentualRJ = (rj / total) * 100;
const percentualMG = (mg / total) * 100;
const percentualES = (es / total) * 100;
const percentualOutros = (outros / total) * 100;

console.log('Percentual de Representação: SP', percentualSP.toFixed(2), '%');
console.log('Percentual de Representação: RJ', percentualRJ.toFixed(2), '%');
console.log('Percentual de Representação: MG', percentualMG.toFixed(2), '%');
console.log('Percentual de Representação: ES', percentualES.toFixed(2), '%');
console.log('Percentual de Representação: Outros', percentualOutros.toFixed(2), '%');

