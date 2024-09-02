// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// Grupo (1) dia normal 
// Grupo (2) feriado e finais de semana

const fs = require('fs');
const path = require('path');

async function processarFaturamento() {
    try {
        const filePath = path.resolve(__dirname, 'faturamento.json');
        const data = fs.readFileSync(filePath, 'utf8');
        const dados = JSON.parse(data);

        faturamentoOcorrido(dados);
        mediaMensal(dados);

    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
    }
}
processarFaturamento();

function faturamentoOcorrido(dados) {
    let menorValor = 0;
    let maiorValor = 0;

    dados.forEach(item => {
        if (item.grupo === 1) { // Ignora finais de semana e feriados
            // Valida menor faturamento
            if (menorValor > item.valor) {
                menorValor = item.valor;
            } else if (menorValor === 0) {
                menorValor = item.valor;
            }

            // Valida maior faturamento
            if (maiorValor < item.valor) {
                maiorValor = item.valor;
            } else if (maiorValor === 0) {
                maiorValor = item.valor;
            }
        }
    });

    console.log('MENOR valor de faturamento ocorrido em um dia do mês: ', menorValor);
    console.log('MAIOR valor de faturamento ocorrido em um dia do mês: ', maiorValor);
}

function mediaMensal(dados) {
    let diasUteis = 0;
    let media = 0;
    let superior = 0;

    dados.forEach(item => {
        if (item.grupo === 1) {
            diasUteis += 1;
            media += item.valor;
        }
    });
    media = media / diasUteis;

    dados.forEach(item => {
        if (item.grupo === 1) {
            if (item.valor > media) {
                superior += 1;
            }
        }
    });

    console.log("\nDias de Faturamento: ", diasUteis);
    console.log("Media de Faturamento Mensal: ", media);
    console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ", superior);
}
