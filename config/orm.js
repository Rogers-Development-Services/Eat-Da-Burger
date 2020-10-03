const { response } = require("express"); ///ghost express
const burger = require("../models/burger.js");
const connection = require("./connection.js");

let tableName = "burgers";

let orm = {

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

    insertOne: function (bodyObj) {
        return new Promise(function (resolve, reject) {
            let insert = "INSERT INTO " + tableName + "(burger_name, devoured) VALUES (?,?)";
            connection.query(
                insert,
                [bodyObj.name, false],
                function (error, data) {
                    console.log("ORM insert query data: ", data);
                    if (error) reject(error);
                    resolve(data)
                });
        });
    },

    updateOne: function (bodyObj) {
        return new Promise(function (resolve, reject) {
            let update = "UPDATE " + tableName + " SET devoured = true WHERE id = ?"
            console.log("ORM bodyObj : ", bodyObj);
            connection.query(
                update,
                [bodyObj.id],
                function (error, data) {
                    if (error) reject(error);
                    resolve(data)
                });
        });
    }
};

module.exports = orm;