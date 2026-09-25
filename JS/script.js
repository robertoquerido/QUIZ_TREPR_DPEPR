
//-------------------------------------------------------------//
const botaoSaibaMais = document.querySelector(".botaoSaibaMais");
const lateralPicotada = document.querySelector(".lateralPicotada");
const botaoFecharSaibaMais = document.querySelector(".botaoFecharSaibaMais");
const elementosDesfocar = document.querySelectorAll(".logoEleicoes2026, .textoInicial, .botoes, .logosInstitucionais");
const elementosDesfocarInicial = document.querySelectorAll(".logoEleicoes2026, .textoInicial, .botoes, .logosInstitucionais, .lateralPicotada, .botaoSaibaMais");
const blocoTextoLateral = document.querySelector(".blocoTextoLateral");
const botaoIniciar = document.querySelector(".botaoIniciar");
const paginaInicial = document.querySelector(".paginaInicial");
const telaQuiz = document.querySelector(".telaQuiz");
const bottomPicotado = document.querySelector(".bottomPicotado");
const botaoFecharQuiz = document.querySelector(".botaoFecharQuiz");

botaoSaibaMais.addEventListener("click", function() {
    lateralPicotada.classList.add("aberta");
    botaoSaibaMais.classList.add("visivel");
    botaoFecharSaibaMais.classList.remove("visivel");
    blocoTextoLateral.classList.remove("visivel");
    agendarAjusteQuiz();

    for (let i = 0; i < elementosDesfocar.length; i++) {
        elementosDesfocar[i].classList.add("desfocada");}
});

botaoFecharSaibaMais.addEventListener("click", function() {
    lateralPicotada.classList.remove("aberta");
    botaoSaibaMais.classList.remove("visivel");
    blocoTextoLateral.classList.add("visivel");
    botaoFecharSaibaMais.classList.add("visivel");

    for (let i = 0; i < elementosDesfocar.length; i++) {
        elementosDesfocar[i].classList.remove("desfocada");}
});






// BOTAO INICIAR QUIZ
botaoIniciar.addEventListener("click", function() {
    iniciarAnalyticsQuiz();
    iniciarQuiz();

    botaoIniciar.classList.add("visivel");
    bottomPicotado.classList.add("aberta");
    for (let i = 0; i < elementosDesfocarInicial.length; i++) {
        elementosDesfocarInicial[i].classList.add("desfocadaIniciar");}

    setTimeout(function() {
        paginaInicial.classList.add("visivel");
        telaQuiz.classList.remove("visivel");
    }, 
    1000);

});
//-------------------------------------------------------------//

// FECHAR QUIZ SEM TERMINAR
botaoFecharQuiz.addEventListener("click", function() {
    registrarAbandonoAnalytics();
    cancelarExplicacao();

    botaoIniciar.classList.remove("visivel");
    bottomPicotado.classList.remove("aberta");

    for (let i = 0; i < elementosDesfocarInicial.length; i++) {
        elementosDesfocarInicial[i].classList.remove("desfocadaIniciar");
    }

    paginaInicial.classList.remove("visivel");
    telaQuiz.classList.add("visivel");


    // ZERA O QUIZ
    perguntaAtual = null;
    acertos = 0;
    respondidas = 0;

    // ZERA VISUALMENTE A BARRA
    progresso();



});
//-------------------------------------------------------------//




