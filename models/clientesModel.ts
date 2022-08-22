import db from '../db'
import  Sequelize  from 'sequelize'

export default db.define('cliente', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull:true
    },
    email: {
        type: Sequelize.STRING,
        allowNull:true
    }
});