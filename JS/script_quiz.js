const alternativa01 = document.querySelector(".alternativa01");
const alternativa02 = document.querySelector(".alternativa02");
const alternativa03 = document.querySelector(".alternativa03");
const alternativa04 = document.querySelector(".alternativa04");
const botaoAlt = document.querySelector(".botaoAlt");
const botaoClicado = document.querySelector(".botaoClicado");



//-------------------------------------------------------------//
// ELEMENTOS DO HTML
//-------------------------------------------------------------//

// Procura no HTML a div que possui a classe "enunciado"
const enunciado = document.querySelector(".enunciado");

// Procura no HTML todos os elementos que possuem a classe "botaoAlt"
// No seu caso, serão as quatro alternativas
const alternativas = document.querySelectorAll(".botaoAlt");

// Mede o texto real: perguntas longas e telas baixas recebem uma fonte menor.
// O limite superior vem do CSS, preservando o destaque do enunciado.
function ajustarTextoAoEspaco(elemento) {
    if (!elemento.clientHeight || !elemento.textContent.trim()) return null;

    if (!elemento.firstElementChild) {
        const texto = document.createElement("span");
        texto.textContent = elemento.textContent;
        texto.style.display = "block";
        elemento.replaceChildren(texto);
    }

    elemento.style.fontSize = "";
    const estilo = getComputedStyle(elemento);
    const altura = elemento.clientHeight - parseFloat(estilo.paddingTop) - parseFloat(estilo.paddingBottom);
    const largura = elemento.clientWidth - parseFloat(estilo.paddingLeft) - parseFloat(estilo.paddingRight);
    const texto = elemento.firstElementChild;
    let minimo = 1;
    let maximo = parseFloat(estilo.fontSize);

    // Busca a maior fonte que cabe, com uma pequena margem para arredondamento.
    for (let i = 0; i < 12; i++) {
        const tamanho = (minimo + maximo) / 2;
        elemento.style.fontSize = tamanho + "px";
        if (texto.getBoundingClientRect().height <= altura - 2 && texto.scrollWidth <= largura + 1) {
            minimo = tamanho;
        } else {
            maximo = tamanho;
        }
    }
    elemento.style.fontSize = minimo + "px";
    return minimo;
}

function ajustarTextosQuiz() {
    const textoMenu = document.querySelector(".blocoTextoLateral");
    if (matchMedia("(min-width: 900px)").matches) {
        ajustarTextoAoEspaco(textoMenu);
    } else {
        textoMenu.style.fontSize = "";
    }
    ajustarTextoAoEspaco(document.querySelector(".resumoResultado"));
    ajustarTextoAoEspaco(document.querySelector(".informacoesResultado"));
    if (modalExplicacao.open) posicionarExplicacao();
    ajustarTextoAoEspaco(document.querySelector(".textoExplicacao"));
    ajustarTextoAoEspaco(enunciado);
    const tamanhos = Array.from(alternativas, ajustarTextoAoEspaco).filter(tamanho => tamanho !== null);
    // Todas as alternativas usam a mesma fonte, inclusive as mais curtas.
    if (tamanhos.length) {
        const tamanho = Math.min(...tamanhos);
        alternativas.forEach(elemento => elemento.style.fontSize = tamanho + "px");
    }
}

let ajustePendente;
function agendarAjusteQuiz() {
    cancelAnimationFrame(ajustePendente);
    ajustePendente = requestAnimationFrame(ajustarTextosQuiz);
}

new ResizeObserver(agendarAjusteQuiz).observe(document.querySelector(".telaQuiz"));
new ResizeObserver(agendarAjusteQuiz).observe(document.querySelector(".telaResultado"));
new ResizeObserver(agendarAjusteQuiz).observe(document.querySelector(".blocoTextoLateral"));
document.fonts.ready.then(agendarAjusteQuiz);
document.fonts.addEventListener("loadingdone", agendarAjusteQuiz);
window.visualViewport?.addEventListener("resize", agendarAjusteQuiz);


//-------------------------------------------------------------//
// VARIÁVEIS DO QUIZ
//-------------------------------------------------------------//

// Aqui ficarão somente as perguntas que ainda não foram mostradas
let perguntasDisponiveis = [];



// Aqui ficará armazenada a pergunta que está sendo mostrada no momento
let perguntaAtual = null;

// Quantidade de respostas corretas
let acertos = 0;

// Quantidade total de perguntas respondidas
let respondidas = 0;
let respostaBloqueada = false;
let temporizadorExplicacao;
let animacaoResposta;
const modalExplicacao = document.querySelector(".modalExplicacao");
const textoExplicacao = document.querySelector(".textoExplicacao");
const tituloExplicacao = document.querySelector("#tituloExplicacao");
const botaoOkExplicacao = document.querySelector(".botaoOkExplicacao");

new ResizeObserver(agendarAjusteQuiz).observe(modalExplicacao);
modalExplicacao.addEventListener("cancel", evento => evento.preventDefault());

function posicionarExplicacao() {
    const correta = document.querySelector(".respostaEmDestaque");
    if (!correta) return;
    const topo = correta.getBoundingClientRect().bottom + 16;
    const fim = document.querySelector(".progressao").getBoundingClientRect().top - 16;
    modalExplicacao.style.setProperty("--explicacao-topo", topo + "px");
    modalExplicacao.style.setProperty("--explicacao-altura", Math.max(0, fim - topo) + "px");
}

function restaurarAlternativas() {
    animacaoResposta?.cancel();
    document.querySelector(".telaQuiz").classList.remove("exibindoExplicacao");
    alternativas.forEach(alternativa => alternativa.classList.remove("respostaEmDestaque"));
}

function cancelarExplicacao() {
    clearTimeout(temporizadorExplicacao);
    modalExplicacao.close();
    restaurarAlternativas();
    respostaBloqueada = false;
}

botaoOkExplicacao.addEventListener("click", function () {
    if (!modalExplicacao.open) return;
    modalExplicacao.close();
    restaurarAlternativas();
    progresso();
    sortearPergunta();
    if (perguntaAtual) alternativas[0].focus({ preventScroll: true });
    else {
        document.querySelector("#tituloResultado").focus({ preventScroll: true });
    }
});


//-------------------------------------------------------------//
// FUNÇÃO PARA EMBARALHAR UM ARRAY
//-------------------------------------------------------------//

function embaralhar(array) {

    // slice() cria uma cópia do array.
    // Fazemos isso para não alterar o array original.
    let novoArray = array.slice();


    // Começamos pelo último item do array e vamos andando para trás.
    for (let i = novoArray.length - 1; i > 0; i--) {

        // Sorteia uma posição entre 0 e a posição atual.
        let posicaoAleatoria = Math.floor(
            Math.random() * (i + 1)
        );

        // Guardamos temporariamente o item atual.
        let itemTemporario = novoArray[i];

        // Colocamos o item sorteado na posição atual.
        novoArray[i] = novoArray[posicaoAleatoria];

        // Colocamos o item que estava na posição atual na posição sorteada.
        novoArray[posicaoAleatoria] = itemTemporario;
    }


    // Devolve o novo array já embaralhado.
    return novoArray;
}


//-------------------------------------------------------------//
// INICIAR O QUIZ
//-------------------------------------------------------------//

function iniciarQuiz() {
    document.querySelector(".telaResultado").classList.add("visivel");
    cancelarExplicacao();

    // Faz uma cópia de todas as perguntas.

    perguntasDisponiveis = perguntas.slice(); // Essa será a lista das perguntas que ainda podem aparecer.
    acertos = 0; // Zera a pontuação.
    respondidas = 0; // Zera a quantidade de perguntas respondidas.
    progresso();
    sortearPergunta(); // Sorteia a primeira pergunta.
}

//-------------------------------------------------------------//
// SORTEAR UMA PERGUNTA
//-------------------------------------------------------------//

function sortearPergunta() {

    // Primeiro verificamos se ainda existem perguntas disponíveis.
    if (perguntasDisponiveis.length === 0) {

        // Se não houver mais nenhuma,
        // o quiz terminou.
        finalizarQuiz();

        return;
    }


    // Sorteia um número entre: 0 e  quantidade de perguntas disponíveis - 1
    //
    // Esse número será a posição da pergunta sorteada.
    let indiceSorteado = Math.floor(
        Math.random() * perguntasDisponiveis.length
    );


    // Pegamos a pergunta sorteada.
    perguntaAtual = perguntasDisponiveis[indiceSorteado];


    // Agora removemos essa pergunta da lista de perguntas disponíveis.
    //
    // Isso é o que impede uma pergunta já mostrada de aparecer novamente.
    perguntasDisponiveis.splice(indiceSorteado, 1);

    // Depois de escolher a pergunta, mandamos ela aparecer na tela.
    mostrarPergunta();
}


//-------------------------------------------------------------//
// MOSTRAR A PERGUNTA
//-------------------------------------------------------------//

function mostrarPergunta() {
    restaurarAlternativas();
    respostaBloqueada = false;
    agendarAjusteQuiz();

    // Coloca o texto da pergunta dentro da div ".enunciado".
    enunciado.textContent = perguntaAtual.pergunta;


    // Embaralha as quatro respostas da pergunta atual.
    //
    // O array original continua intacto.
    let respostasEmbaralhadas = embaralhar(
        perguntaAtual.respostas
    );


    // Percorre as quatro divs das alternativas.
    for (let i = 0; i < alternativas.length; i++) {

        // Pega a alternativa do HTML.
        let alternativaHTML = alternativas[i];
        alternativaHTML.classList.remove("correta", "errada", "visivel");
        alternativaHTML.disabled = false;


        // Pega a resposta correspondente
        // no array que acabamos de embaralhar.
        let resposta = respostasEmbaralhadas[i];


        // Coloca o texto da resposta dentro da div.
        alternativaHTML.textContent = resposta.texto;


        // Guardamos dentro do próprio elemento HTML
        // qual resposta ele representa.
        alternativaHTML.resposta = resposta;


        // Quando o usuário clicar nessa alternativa...
        alternativaHTML.onclick = function () {

            // ...enviamos a resposta escolhida para a função responder().
            responder(this.resposta, this);
        };
    }
}


//-------------------------------------------------------------//
// RESPONDER UMA PERGUNTA
//-------------------------------------------------------------//

function responder(resposta, botaoClicado) {
    if (respostaBloqueada || !perguntaAtual) return;
    respostaBloqueada = true;
    alternativas.forEach(alternativa => alternativa.disabled = true);

    // Toda vez que o usuário escolhe uma alternativa, aumentamos o número de perguntas respondidas.
    respondidas = respondidas + 1;

    // Verifica se a propriedade "correta" da resposta escolhida é true.
    if (resposta.correta === true) {
        // Se for correta, soma um ponto.
        acertos = acertos + 1;
        console.log("Resposta correta!");
        botaoClicado.classList.add("correta");

    } else {
        // Se for false, não soma ponto.
        console.log("Resposta errada!");
        botaoClicado.classList.add("errada");
    }

    temporizadorExplicacao = setTimeout(function() {
        const correta = Array.from(alternativas).find(alternativa => alternativa.resposta.correta);
        const posicaoAnterior = correta.getBoundingClientRect().top;
        correta.classList.add("respostaEmDestaque", "correta");
        document.querySelector(".telaQuiz").classList.add("exibindoExplicacao");
        const deslocamento = posicaoAnterior - correta.getBoundingClientRect().top;
        const duracao = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 350;
        animacaoResposta = correta.animate([
            { transform: `translateY(${deslocamento}px)` },
            { transform: "translateY(0)" }
        ], { duration: duracao, easing: "ease-in-out" });

        temporizadorExplicacao = setTimeout(function () {
            animacaoResposta.finish();
            tituloExplicacao.textContent = "Por que é essa?";
            textoExplicacao.textContent = perguntaAtual.explicacao;
            posicionarExplicacao();
            modalExplicacao.showModal();
            ajustarTextosQuiz();
        }, duracao);
    }, 600);


}

//-------------------------------------------------------------//
// FUNCAO PROGRESSO
//-------------------------------------------------------------//

function progresso() {
    const barraProgressao = document.querySelector(".barraProgressao");
    const porcentagem = (respondidas / perguntas.length) * 100;
    barraProgressao.style.width = porcentagem + "%";
}

//-------------------------------------------------------------//
// FINALIZAR O QUIZ
//-------------------------------------------------------------//

function finalizarQuiz() {
    perguntaAtual = null;
    document.querySelector(".pontuacaoResultado").textContent =
        acertos + (acertos === 1 ? " questão de " : " questões de ") + perguntas.length;
    document.querySelector(".telaQuiz").classList.add("visivel");
    document.querySelector(".telaResultado").classList.remove("visivel");
    agendarAjusteQuiz();

        alternativa01.classList.add("visivel");
        alternativa02.classList.add("visivel");
        alternativa03.classList.add("visivel");
        alternativa04.classList.add("visivel");

    // Mostra o resultado no lugar do enunciado.
    enunciado.textContent =
        "Fim! Você acertou " +
        acertos +
        " de " +
        respondidas +
        ".";

    // Percorre as quatro alternativas.
    for (let i = 0; i < alternativas.length; i++) {

        // Apaga o texto.
        alternativas[i].textContent = "";

        // Remove a função de clique.
        alternativas[i].onclick = null;
    }
}

//-------------------------------------------------------------//




//-------------------------------------------------------------//
// INICIAR
//-------------------------------------------------------------//

// Essa linha é executada assim que o JavaScript é carregado.
// Ela dá início a todo o processo.
iniciarQuiz();

document.querySelector(".fecharResultado").addEventListener("click", function () {
    document.querySelector(".telaResultado").classList.add("visivel");
    botaoFecharQuiz.click();
});

//-------------------------------------------------------------//

