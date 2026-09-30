const agendamento = require('../models/Agendamento')

const cadastrar = async (req, res) => {
    req.body = valores
    console.log(valores)

    if(!valores.nome )


    try {
        await agendamento.create(valores)
        res.status(201).json({ message: 'Operação concluída com sucesso' })
    } catch (err) {
        console.err('Erro na operação', err)
        res.status(500).json({ message: 'Erro na operação com sucesso' })
    }
}


const listar = async (req, res) => {
    req.body = valores
    console.log(valores)

    try {
        await agendamento.create(valores)
        res.status(201).json({ message: 'Operação concluída com sucesso' })
    } catch (err) {
        console.err('Erro na operação', err)
        res.status(500).json({ message: 'Erro na operação com sucesso' })
    }
}

module.exports = { cadastrar}