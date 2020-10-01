const orm = require("../config/orm");

const burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (response) {
      callback(response);
    });
  },

  // selectAll: function () {
  //   return new Promise(function (resolve, reject) {
  //     orm.selectAll()
  //       .then(function (error, data) {
  //         if (error) reject(error);
  //         resolve(data)
  //       })
  //       .catch(function (error){
  //         console.log("Inside of catch from model: " + error);
  //       });
  //   });
  // },
  //   create: function (cols, vals, callback) {
  //     orm.insertOne("burgers", cols, vals, function (res) {
  //       callback(res);
  //     });
  //   },
  //   update: function (objColVals, condition, callback) {
  //     orm.updateOne("burgers", objColVals, condition, function (res) {
  //       callback(res);
  //     });
  //   },
}

module.exports = burger;