import { documentosColecao } from "./dbConnect.js"

function encontrarDocumento(nome) {
  return documentosColecao.findOne({ nome })
}

function atualizaDocumento(nome, texto) {
  return documentosColecao.updateOne({ nome }, { $set: { texto }})
}

export { encontrarDocumento, atualizaDocumento }