const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Dispositivo = db.define('dispositivo', {
    codDispositivo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modelo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    numeroSerie: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            key: 'codCliente',
            model: 'Cliente'
        }
    },
    telefone: {
        type: DataTypes.STRING(11),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Dispositivo'
})

module.exports = Dispositivo