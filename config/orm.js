const connection = require("./connection");

let tableName = "burgers";

let orm = {
    selectAll: function(callback) {
        let select = "SELECT * FROM " + tableName;

        connection.query(
           select,
           function(error, data) {
               if(error) throw error;
               callback(data);
           });
    },

    insertOne: function(burger, callback) {
        let routeName = burger.burger_name.replace(/\s+/g, "").toLowerCase();
        console.log(routeName);

        let insert = "INSERT INTO " + tableName + " (routeName, burger_name, devoured) VALUES (?,?,?)";

        connection.query(
           insert,
           [routeName, burger.burger_name, burger.devoured],
           function(error, data) {
               if(error) throw error;
               callback(data);
           });
    },

    updateOne: function(burger, callback) {
        let routeName = burger.burger_name.replace(/\s+/g, "").toLowerCase();
        console.log(routeName);

        let update = //????

        connection.query(
           update,
           [queryParameters],
           function(error, data) {
               if(error) throw error;
               callback(data);
           });
    }
};

module.exports = orm;