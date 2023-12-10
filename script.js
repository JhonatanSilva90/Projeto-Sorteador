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