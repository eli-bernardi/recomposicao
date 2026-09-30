const dispositivo = require('../models/Dispositivo')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.modelo || !valores.marca || !valores.numeroSerie || !valores.telefone) {

        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {

        await cliente.create({
            modelo: modelo,
            marca: marca,
            numeroSerie: numeroSerie,
            telefone: telefone
        })

        res.status(201).json({ message: 'Dispositivo cadastrados com sucesso!' })
    } catch (err) {
        console.error('Erro ao cadastrar o Dispositivo', err)
        res.status(500).json({ message: 'Erro ao cadastrar o Dispositivo' })
    }
}


module.exports = { cadastrar }