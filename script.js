// Criando elementos HTML dinamicamente:
// Criando o header
const header = document.createElement("header");
const h1 = document.createElement("h1");
h1.textContent = "Sorteador";
const div = document.createElement("div");
const input = document.createElement("input");
input.id = "participante";
input.placeholder = "Nome";
input.type = "text";
const buttonAdicionar = document.createElement("button");
buttonAdicionar.textContent = "Adicionar Participante";
buttonAdicionar.onclick = handleAdicionarParticipante;

div.appendChild(input);
div.appendChild(buttonAdicionar);
header.appendChild(h1);
header.appendChild(div);

const hr = document.createElement("hr");

// Criando o main
const main = document.createElement("main");
const pParticipanteSorteado = document.createElement("p");
pParticipanteSorteado.id = "participante-sorteado";
const h2 = document.createElement("h2");
h2.textContent = "Participantes";
const ul = document.createElement("ul");
ul.id = "participantes";
const buttonSortear = document.createElement("button");
buttonSortear.textContent = "Sortear";
buttonSortear.onclick = handleSortear;

main.appendChild(pParticipanteSorteado);
main.appendChild(h2);
main.appendChild(ul);
main.appendChild(buttonSortear);

// Adicionando elementos criados ao body
document.body.appendChild(header);
document.body.appendChild(hr);
document.body.appendChild(main);

// "Banco de dados"
let participantes = []

// Elementos Da Tela
// Funções de Entrada (Capturar valores do Input)
const inputParticipante = document.getElementById('participante')
function obterParticipante() {
  return inputParticipante.value.trim()
}

// Funções de Saída (Colocar valores dentro das tags HTML)
const ulParticipantes = document.getElementById('participantes')
function mostrarParticipantes(participantes) {
  ulParticipantes.innerHTML = ''

  for (let participante of participantes) {
    // Criando tag do participante
    let liParticipante = document.createElement('li')
    liParticipante.textContent = participante
    liParticipante.classList.add('participante')

    ulParticipantes.appendChild(liParticipante)
  }
    // Para limpar o valor da caixa após ele ser adicionado.
  inputParticipante.value = ''
  inputParticipante.focus()
}

let pSorteio = document.getElementById('participante-sorteado')
function mostrarSorteado(participanteSorteado) {
  pSorteio.innerText = `Sorteado: ${participanteSorteado}`
}

// Funções de Handle (Funções para lidar com os eventos DOM)
// Essas funções, chamarão as funções de entrada e saida.
function handleAdicionarParticipante() {
  let participante = obterParticipante()
  participantes.push(participante)
  mostrarParticipantes(participantes)
}




function handleSortear() {
  let posicaoSorteada = Math.floor(Math.random() * participantes.length)
  let participanteSorteado = participantes[posicaoSorteada]
  mostrarSorteado(participanteSorteado)
}

// Event Listers
const botaoAdicionarParticipante = document.querySelector('#botao-adicionar-participante') 
const botaoSortear = document.querySelector('#botao-sortear')

botaoAdicionarParticipante.addEventListener('click', handleAdicionarParticipante)
botaoSortear.addEventListener('click', handleSortear)