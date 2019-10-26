var orm = require("../config/orm");

// CREATE the code that will call the ORM functions using burger specific input

var burger = {

    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function(vals, callback) {
        orm.insertOne("burgers", ["burger_name", "devoured"], vals, function(res) {
            // callback(res);
        })
    },

    updateOne: function(table, col, val, colToUpdate, valToUpdate, callback) {
        orm.updateOne("burgers", "devoured", val, "id", valToUpdate, function(res) {
            
        })
    }
}

module.exports = burger;