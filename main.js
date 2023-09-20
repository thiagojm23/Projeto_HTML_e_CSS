const url = window.location.href;

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

/*Este efeito esta sendo aplicado apenas com CSS no id #change-bg:  active
const botao = document.getElementById("change-bg");
function buttonEffect() {
  botao.classList.add("efeito-clique");
  setTimeout(() => {
    botao.classList.remove("efeito-clique");
  }, 200);
}*/

//botao.addEventListener("click", buttonEffect);

const paragrafo = document.querySelector(".apresentacao__conteudo__texto");

//Apenas um comando para dar no console
function pegarCor() {
  const corAtual = getComputedStyle(paragrafo).color;
  return corAtual;
}
function trocaCor() {
  const pegueiCor = pegarCor();
  if (pegueiCor == "rgb(248, 240, 229)") {
    paragrafo.style.color = "red";
  } else {
    paragrafo.style.color = "white";
  }
}
/*const elemento = document.querySelectorAll("a");
console.log(elemento[2].innerHTML);
elemento[2].innerHTML = "Realizando um teste";
console.log(elemento[2].innerHTML);*/

if (url.includes("index.html")) {
  const elementosRede = document.querySelectorAll(".apresentacao__links__site");
  const original0 = elementosRede[0].innerHTML;
  const original1 = elementosRede[1].innerHTML;
  const original2 = elementosRede[2].innerHTML;
  function alterarRedes() {
    if (elementosRede[0].textContent == "Discord") {
      //console.log("teste23");
      elementosRede[0].innerHTML = original0;
      elementosRede[1].innerHTML = original1;
      elementosRede[2].innerHTML = original2;
    } else {
      elementosRede[0].innerHTML = "Discord";
      elementosRede[1].innerHTML = "Pinterest";
      elementosRede[2].innerHTML = "PS Plus";
    }
  }

  /*Testando situações referente a classList.add
  if (elementosRede[0].classList.contains("strong-flamengo")) {
    console.log("teste1");
    elementosRede[0].classList.remove("strong-flamengo");
  } else {
    console.log("testeThigas");
    elementosRede[0].classList.add("strong-flamengo");
  }*/

  const botaoAlterarRede = document.querySelector(".redes");
  botaoAlterarRede.addEventListener("click", alterarRedes);
}

const paragrafoFlamengoEscondido = document.querySelector("#ver-mais");
function mostrarConteudo() {
  if (paragrafoFlamengoEscondido.classList.contains("mostrarConteudo")) {
    paragrafoFlamengoEscondido.classList.remove("mostrarConteudo");
  } else {
    paragrafoFlamengoEscondido.classList.add("mostrarConteudo");
  }
}
paragrafoFlamengoEscondido.addEventListener("click", mostrarConteudo);
