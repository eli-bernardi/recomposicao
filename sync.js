const conn = require('./db/conn')
const { Agendamento, Cliente, Dispositivo } = require('./models/rel')

async function syncDataBase() {
    try {
        await conn.sync({ force: true })

        console.log('--------------------------------------------------')
        console.log('Banco de dados sincronizado com sucesso')
        console.log('--------------------------------------------------')
    } catch (err) {
        console.error('Erro na sincronização do banco', err)
    } finally {
        await conn.close()
        console.log('Banco Fechado')
    }
}

syncDataBase()