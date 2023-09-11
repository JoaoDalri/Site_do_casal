$(document).ready(function() {
    const envelope = $('#envelope');
    const btn_open = $("#open");
    const btn_reset = $('#reset');
    const closeModal = $('#close-modal');

    envelope.click(function() {
        open();
    });

    btn_open.click(function() {
        open();
    });

    closeModal.click(function() {
        close(); // Chame a função close() diretamente quando o botão de fechamento for clicado
    });

    function open() {
        envelope.addClass('open').removeClass('close');
    }

    function close() {
        envelope.addClass('close').removeClass('open');
    }
});




const envelope = document.querySelector('#envelope');
const btn_open = document.querySelector("#open");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const openModal = () => {
    [modal, fade].forEach((element) => element.classList.remove("hide"));
};

const closeModalImmediately = () => {
    [modal, fade].forEach((element) => element.classList.add("hide"));
};

btn_open.addEventListener("click", () => {
    setTimeout(openModal, 3000); // 2000 milissegundos (2 segundos) de atraso para abrir
});

closeModal.addEventListener("click", closeModalImmediately, );






// Contagem regressiva para a data da comemoração
var dataComemoracao = new Date("2023-09-12"); // Data da comemoração em 12 de setembro
var countdownElement = document.getElementById("countdown-text");

function atualizarContagemRegressiva() {
    var agora = new Date();
    var diferenca = dataComemoracao - agora;

    if (diferenca <= 0) {
        countdownElement.textContent = "A comemoração está aqui!";
    } else {
        var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        countdownElement.textContent = dias + " dias, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";
    }
}

setInterval(atualizarContagemRegressiva, 1000);

// Data de início (substitua com a data desejada)
var dataInicio = new Date("2023-03-17"); // Exemplo: 12 de setembro de 2023

// Data de hoje
var dataHoje = new Date();

// Calcula a diferença em milissegundos
var diferencaEmMilissegundos = dataHoje - dataInicio;

// Calcula a diferença em dias
var diasCorridos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

// Exibe o resultado no elemento com o ID "resultado"
document.getElementById("resultado").textContent = diasCorridos;

// Referência ao nome no canto inferior esquerdo
var nameElement = document.querySelector(".avatar");

// Referência ao menu
var menu = document.getElementById("menu-overlay");

// Evento de clique no nome
nameElement.addEventListener("click", function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});


// PERFIL

const btn_Perfil = document.querySelector("#botaoperfil");
const closeModal_overlay = document.querySelector("#closeModal-overlay");
const modal_overlay = document.querySelector("#modal-overlay");
const fade_overlay = document.querySelector("#fade-overlay");
const openPerfil = () => {
    [modal_overlay, fade_overlay].forEach((element) => element.classList.remove("hide-overlay"));
    menu.style.display = "none";

    
};
const closePerfil_overlay = () => {
    [modal_overlay, fade_overlay].forEach((element) => element.classList.add("hide-overlay"));
};

btn_Perfil.addEventListener("click", openPerfil,open);

closeModal_overlay.addEventListener("click", closePerfil_overlay);



// EM andamento

// Abrir o modal "Em Andamento" ao clicar no botão correspondente
document.getElementById("botaoAndamento").addEventListener("click", function () {
    openModalAndamento();
});

// Fechar o modal "Em Andamento" ao clicar no botão de fechar
document.getElementById("close-modal-andamento").addEventListener("click", function () {
    closeModalAndamento();
});

// Função para abrir o modal "Em Andamento"
function openModalAndamento() {
    var modalAndamento = document.getElementById("modal-andamento");
    var fadeAndamento = document.getElementById("fade-andamento");
    modalAndamento.style.display = "block";
    fadeAndamento.style.display = "block";
    menu.style.display = "none";

}

// Função para fechar o modal "Em Andamento"
function closeModalAndamento() {
    var modalAndamento = document.getElementById("modal-andamento");
    var fadeAndamento = document.getElementById("fade-andamento");
    modalAndamento.style.display = "none";
    fadeAndamento.style.display = "none";
}


// Deslogar
const deslogar = document.querySelector("#deslogar")

deslogar.addEventListener("click", function () {
    window.location.href = "login.html";
    console.log('Ação de continuação executada'); 
});


const reclameAqui= document.querySelector("#reclame")

reclameAqui.addEventListener("click",function(){
    alert("O site é um presente de boa fé, e ainda é de graça. QUER RECLAMAR OQUE?")
});