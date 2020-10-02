const { response } = require("express"); ///ghost express
const burger = require("../models/burger.js");
const connection = require("./connection.js");

let tableName = "burgers";

let orm = {

    // selectAll: function(tableInput, callback) {
    //     let select = "SELECT * FROM " + tableInput;
    //     connection.query(
    //        select,
    //        function(error, result) {
    //            if(error) throw error; 
    //            callback(result);
    //        });
    // },

    //selcet All is returning a promise containing the information from MYSQL
    selectAll: function () {
        return new Promise(function (resolve, reject) {
            let select = "SELECT * FROM " + tableName;
            connection.query(
                select,
                function (error, data) {
                    if (error) reject(error);
                    resolve(data);
                    // console.log("GET MYSQL Data: ", data);
                });
        })
    },

    insertOne: function () {
        return new Promise(function (resolve, reject) {
            let insert = "INSERT INTO " + tableName + "(burger_name, devoured) VALUES (?,?)";
            connection.query(
                insert,

                function (error, data) {
                    console.log("orm.js INSERT data: ", data);
                    if (error) reject(error);
                    resolve(data)
                    console.log("resolved data from INSERT orm.js: ", resolve(data));
                });
        });
    }

    // insertOne: function(table, callback) {
    //     console.log(table);
    //     // let routeName = table.burger_name.replace(/\s+/g, "").toLowerCase();
    //     // console.log(routeName);

    //     let insert = "INSERT INTO " + table + "(burger_name, devoured) VALUES (?,?)";

    //     connection.query(
    //        insert,
    //        [table.burger, table.devoured],
    //        function(error, data) {
    //            if(error) throw error;
    //            callback(data);
    //        });
    // },

    // // Do I need to pass in devoured?
    //     updateOne: function(burger, callback) {
    //         let routeName = burger.burger_name.replace(/\s+/g, "").toLowerCase();
    //         console.log(routeName);

    //         let update = "UPDATE" + tableName + "SET" + "(burger_name, devoured) VALUES (?,?)";

    //         connection.query(
    //            update,
    //            [burger.burger_name, burger.devoured],
    //            function(error, data) {
    //                if(error) throw error;
    //                callback(data);
    //            });
    //     }
};

module.exports = orm;