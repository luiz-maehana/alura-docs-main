import { emitirAdicionarDocumento } from './socket-front-index.js'

const listaDocumento = document.getElementById('lista-documentos')

const form = document.getElementById('form-adiciona-documento')
const inputDocumento = document.getElementById('input-documento')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  emitirAdicionarDocumento(inputDocumento.value)
  inputDocumento.value = ''
})

function inserirLinkDocumento(nomeDocumento) {
  listaDocumento.innerHTML += `
    <a href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action">
      ${nomeDocumento}
    </a>`
}

export { inserirLinkDocumento }