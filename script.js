
let tentativas = 0;
let vitorias = 0;
let premio = Math.floor(Math.random() * 3) + 1;
let escolhido = false;

let cofre1 = document.getElementById("cofre1");
let cofre2 = document.getElementById("cofre2");
let cofre3 = document.getElementById("cofre3");

let resultado = document.getElementById("resultado");
let mostrarTentativas = document.getElementById("tentativas");
let mostrarVitorias = document.getElementById("vitorias");
let jogarNovamente = document.getElementById("jogarNovamente");

function abrirCofre(numero) {
    if (escolhido == true) {
        return;
    }

    escolhido = true;
    tentativas++;

    if (numero == premio) {
        resultado.innerHTML = "Parabéns! Você encontrou o prêmio! 🎉";
        vitorias++;
    } else {
        resultado.innerHTML = "Que pena! Esse cofre estava vazio. 😢";
    }

    mostrarTentativas.innerHTML = tentativas;
    mostrarVitorias.innerHTML = vitorias;

    cofre1.disabled = true;
    cofre2.disabled = true;
    cofre3.disabled = true;

    if (numero == premio) {
        document.getElementById("cofre" + numero).style.backgroundColor = "green";
    } else {
        document.getElementById("cofre" + numero).style.backgroundColor = "darkred";
    }
}

cofre1.onclick = function() {
    abrirCofre(1);
};

cofre2.onclick = function() {
    abrirCofre(2);
};

cofre3.onclick = function() {
    abrirCofre(3);
};

jogarNovamente.onclick = function() {
    premio = Math.floor(Math.random() * 3) + 1;
    escolhido = false;

    resultado.innerHTML = "";

    cofre1.disabled = false;
    cofre2.disabled = false;
    cofre3.disabled = false;

    cofre1.style.backgroundColor = "#444";
    cofre2.style.backgroundColor = "#444";
    cofre3.style.backgroundColor = "#444";
};
