/**
 * Módulo de conexão com o Banco de Dados
 */

const mongoose = require('mongoose')

//Obter do compass (string para conexão com o Banco)
let url = "mongodb+srv://vinicius:123senac@clustervini.kmmihmf.mongodb.net/tarefadb"//TarefasDB é o Banco criado do MongoDB


//Função para conectar o Banco
const conectar = async () => {

    //Tratamento de Exceção
    try {
        await mongoose.connect(url) //Conexão com o DB
        console.log("MongoDB Conectado")
    } catch (error) {
        console.log("Problema Detectado: ", error.message)
        throw error

    }
}

//Função para desconectar o Banco
const desconectar = async () => {
    try {
        await mongoose.disconnect(url) //Desconexão com o DB
        console.log("Desconectado do MongoDB")
    } catch (error) {
        console.log("Problema Detectado: ", error.message)
        throw error
    }
}

//Exportar o Módulo para Main.js
module.exports = {conectar,desconectar}