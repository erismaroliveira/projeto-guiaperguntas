const Sequelize = require("sequelize");
const connection = require("../data/data");

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false})
    .then(() => {
        console.log("Tabela criada com sucesso!");
    })

module.exports = Pergunta;