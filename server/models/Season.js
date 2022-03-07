const { db, Sequelize } = require("../db/db")


module.exports = Season

const Season = db.define('season'{
    number: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }

})