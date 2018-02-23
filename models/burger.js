// Dependencies
var Sequelize = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "burger" model that matches up with DB
var burger = sequelize.define("burger", {
    burger_name: {
        type: Sequelize.STRING
    },
    devoured: {
        type: Sequelize.BOOLEAN
    },
    created_at: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

// Syncs with DB
burger.sync();

// Makes the burger model available for other files 
module.exports = burger;