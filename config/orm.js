const { response } = require("express");
const connection = require("./connection.js");

// let tableName = "burgers";

let orm = {
    
    //why doesn't cb get recognized as a function?

    selectAll: function(tableInput, callback) {
        let select = "SELECT * FROM " + tableInput;
        connection.query(
           select,
           function(error, result) {
               if(error) throw error; 
               callback(result);
           });
    },

    // selectAll: function () {
    //     return new Promise(function (resolve, reject) {
    //         let select = "SELECT * FROM " + tableName;
    //         connection.query(
    //             select,
    //             function (error, data) {
    //                 if (error) reject (error);
    //                 resolve(data);
    //             });
    //     })
    // },

//     insertOne: function(burger, callback) {
//         let routeName = burger.burger_name.replace(/\s+/g, "").toLowerCase();
//         console.log(routeName);

//         let insert = "INSERT INTO " + tableName + "(routeName, burger_name, devoured) VALUES (?,?,?)";

//         connection.query(
//            insert,
//            [routeName, burger.burger_name, burger.devoured],
//            function(error, data) {
//                if(error) throw error;
//                callback(data);
//            });
//     },
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