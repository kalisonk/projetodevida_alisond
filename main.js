const botoes = document.queryselectorAll(".botao");
for (let i  = 0; i < botoes.lenght; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classlist.add("ativo");
    }
}