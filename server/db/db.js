const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_test", "node", "30032003", {
    dialect: "mariadb",
    logging: false
});

const Items = sequelize.define("item", {
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
    img: {
        type: Sequelize.STRING,
    },
    time: {
        type: Sequelize.STRING,
    },
    level: {
        type: Sequelize.STRING
    },
    cal: {
        type: Sequelize.INTEGER
    },
    ingred: {
        type: Sequelize.STRING,
    },
    howcook: {
        type: Sequelize.STRING
    }

});

async function getdb () {
    await sequelize.sync({alert: true});
    // const item = await Items.create( {
    //     name: "Плов",
    //     img: "pilaf.jpg",
    //     time: "60",
    //     level: "medium",
    //     cal: 1500,
    //     ingred: "Рис, Мясо, Горох, Масло, Морковь, Специй",
    // });
    const tag = await Items.findAll();
    // console.log(JSON.stringify(tag));
    return JSON.stringify( tag);
} 
// getdb();
module.exports.db = getdb;


