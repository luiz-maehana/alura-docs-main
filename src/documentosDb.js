import { documentosColecao } from "./dbConnect.js"

function obterDocumentos() {
  return documentosColecao.find().toArray()
}

function adicionarDocumento(nome) {
  return documentosColecao.insertOne({ nome, texto: '' })
}

function encontrarDocumento(nome) {
  return documentosColecao.findOne({ nome })
}

function atualizaDocumento(nome, texto) {
  return documentosColecao.updateOne({ nome }, { $set: { texto }})
}

function excluirDocumento(nome) {
  return documentosColecao.deleteOne({ nome })
}

export { encontrarDocumento, atualizaDocumento, obterDocumentos, adicionarDocumento, excluirDocumento}