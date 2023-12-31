import { MongoClient } from 'mongodb'

const cliente = new MongoClient(process.env.DB_CONNECTION_STRING)

let documentosColecao

try {
  await cliente.connect()

  const db = cliente.db('alura-websockets')

  documentosColecao = db.collection('documentos')

  console.log('Conectado ao Bando de Dados com Sucesso!')

} catch(e) {
  console.log(e)
}

export { documentosColecao }