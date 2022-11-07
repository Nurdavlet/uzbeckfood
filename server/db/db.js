const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "30032003", {
    dialect: "postgres"
});

const Accaunt = sequelize.define("accaunt", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

( async () => {
    sequelize.sync({alter: true})
} )();