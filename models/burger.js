var orm = require("../config/orm");

// CREATE the code that will call the ORM functions using burger specific input

var burger = {

    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

}

module.exports = burger;