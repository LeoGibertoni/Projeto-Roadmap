const perguntas = [
    { pergunta: "O que é JavaScript?", resposta: "JavaScript é uma linguagem de programação usada principalmente para criar interatividade em páginas web."},
    { pergunta: "Como declarar uma variável em JavaScript?", resposta: "Pode-se usar var, let ou const." },
    { pergunta: "O que é uma função anônima?", resposta: "Função sem nome, geralmente usada como argumento."},
    { pergunta: "O que é o console.log?", resposta: "É usado para exibir informações no console do navegador."  },
    { pergunta: "O que é DOM em JavaScript?", resposta: "O DOM (Document Object Model) é a estrutura hierárquica do HTML, manipulável via JavaScript." }
];

let indexAtual = 0;
let att = 1;
let mostrandoResposta = false;  // Variável para controlar se a resposta está sendo mostrada

const perguntaElemento = document.getElementById('pergunta');
const voltarBotao = document.getElementById('voltar');
const avancarBotao = document.getElementById('avancar');
const mostrarRespostaBotao = document.getElementById('btn');

const porcentoElemento = document.getElementById('porcento1');
const etapa1 = document.getElementById('etapa1')
const etapa2 = document.getElementById('etapa2')

function atualizarPergunta() {
    if (mostrandoResposta) {
        perguntaElemento.textContent = perguntas[indexAtual].resposta;  // Exibe a resposta
        mostrarRespostaBotao.textContent = "Mostrar pergunta";  // Muda o texto do botão para "Mostrar pergunta"
    } else {
        perguntaElemento.textContent = perguntas[indexAtual].pergunta;  // Exibe a pergunta
        mostrarRespostaBotao.textContent = "Mostrar resposta";  // Muda o texto do botão para "Mostrar resposta"
    }

    // Atualiza a porcentagem com base em att
    if (att == 1) {
        porcentoElemento.style.width = "14%";
        etapa1.textContent = `20%`;
        etapa2.textContent = `1 de 5`;
    } else if (att == 2) {
        porcentoElemento.style.width = "28%";
        etapa1.textContent = `40%`;
        etapa2.textContent = `2 de 5`;
    } else if (att == 3) {
        porcentoElemento.style.width = "42%";
        etapa1.textContent = `60%`;
        etapa2.textContent = `3 de 5`;
    } else if (att == 4) {
        porcentoElemento.style.width = "56%";
        etapa1.textContent = `80%`;
        etapa2.textContent = `4 de 5`;
    } else {
        porcentoElemento.style.width = "70%";
        etapa1.textContent = `100%`;
        etapa2.textContent = `5 de 5`;
    }
}

atualizarPergunta();  // Atualiza a primeira pergunta

// Lógica para o botão "voltar"
voltarBotao.addEventListener('click', () => {
    if (indexAtual > 0) {
        indexAtual--;  // Decrementa o índice
        att--;  // Atualiza o valor de att
        mostrandoResposta = false;  // Esconde a resposta
        atualizarPergunta();  // Atualiza a pergunta e a porcentagem
    }
});

// Lógica para o botão "avançar"
avancarBotao.addEventListener('click', () => {
    if (indexAtual < perguntas.length - 1) {
        indexAtual++;  // Incrementa o índice
        att++;  // Atualiza o valor de att
        mostrandoResposta = false;  // Esconde a resposta
        atualizarPergunta();  // Atualiza a pergunta e a porcentagem
    }
});

// Lógica para o botão "mostrar resposta" (alternando entre pergunta e resposta)
mostrarRespostaBotao.addEventListener('click', () => {
    mostrandoResposta = !mostrandoResposta;  // Alterna entre mostrar resposta e mostrar pergunta
    atualizarPergunta();  // Atualiza o conteúdo da pergunta ou resposta
});
