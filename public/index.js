import { emitirAdicionarDocumento } from './socket-front-index.js'

const listaDocumento = document.getElementById('lista-documentos')

const form = document.getElementById('form-adiciona-documento')
const inputDocumento = document.getElementById('input-documento')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  emitirAdicionarDocumento(inputDocumento.value)
  inputDocumento.value = ''
})

function inserirLinkDocumento(nome) {
  listaDocumento.innerHTML += `
    <a
      href="documento.html?nome=${nome}"
      class="list-group-item list-group-item-action"
      id="documento-${nome}"
    >
      ${nome}
    </a>`
}

function removerLinkDocumento(nome) {
  const documento = document.getElementById(`documento-${nome}`)
  listaDocumento.removeChild(documento)
}

export { inserirLinkDocumento, removerLinkDocumento }