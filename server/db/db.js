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
    await Items.sync({alert: true});
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


async function setdb(data) {
    await Items.sync();
    const item = await Items.create({
        name: data.name,
        img: data.img,
        time: data.min,
        level: data.level,
        cal: data.cal,
        ingred: data.recipe,
        howcook: data.text
    });
    return {"answer": "Ok"};
}

module.exports.dbset = setdb;

const Author = sequelize.define('authors', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    },
    age: Sequelize.STRING,
    xp: Sequelize.INTEGER,
    about: Sequelize.TEXT('long'),
    img: Sequelize.STRING
});

async function getAuthor() {
    await Author.sync({alert: true});
    const results = await Author.findAll();
    return JSON.stringify(results);
}

module.exports.getauth = getAuthor;


