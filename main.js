const body = document.body;
function changeBackground() {
  body.style.background = "black";
}
function toggleBackground() {
  const corAtual = body.style.backgroundColor;

  if (corAtual == "black") {
    body.style.background = "#20262e";
  } else {
    body.style.background = "black";
  }
}
const botaoChangeBackground = document.getElementById("change-bg");
botaoChangeBackground.addEventListener("click", toggleBackground);

const botao = document.getElementById("change-bg");
function buttonEffect() {
  botao.classList.add("efeito-clique");
  setTimeout(() => {
    botao.classList.remove("efeito-clique");
  }, 200);
}

botao.addEventListener("click", buttonEffect);

const paragrafo = document.querySelector(".apresentacao__conteudo__texto");

//Apenas um comando para dar no console
function pegarCor() {
  const corAtual = getComputedStyle(paragrafo).color;
  return corAtual;
}
function trocaCor() {
  const pegeuiCor = pegarCor();
  if (pegeuiCor == "rgb(248, 240, 229)") {
    paragrafo.style.color = "red";
  } else {
    paragrafo.style.color = "white";
  }
}
