const orm = require("../config/orm");

const burger = {
  //burger.selectAll calls the function "selectAll()" declared from the orm.js file. and returns a promise
  selectAll: function () {
    // the property of the key "selectAll" contains the data from my "burgers" table query in the form of a promise. So burger.selectAll will return data in the form of an array filled with objects pertaining to each column of information from my burger table.
    return orm.selectAll("burgers");
  },

  insertOne: function (bodyObj) {
    return orm.insertOne(bodyObj);  //this passes the resolve(data) promise
  },

  updateOne: function (bodyObj) {
    return orm.updateOne(bodyObj);
  }

  // insertOne: function (cols, vals, callback) {
  //   orm.insertOne("burgers", cols, vals, function (response) {
  //     console.log(response);
  //     callback(response);
  //   });
  // },
  // update: function (objColVals, condition, callback) {
  //   orm.updateOne("burgers", objColVals, condition, function (res) {
  //     callback(res);
  //   });
  // },
}

module.exports = burger;