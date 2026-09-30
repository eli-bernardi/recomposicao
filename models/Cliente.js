const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('cliente', {
    codCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(11),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Cliente'
})

module.exports = Cliente