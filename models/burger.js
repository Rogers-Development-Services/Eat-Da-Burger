const orm = require("../config/orm");

const burger = { //burger.selectAll returns a promise, and this is what it looks like
  selectAll: function () { //stuffing the response/promise into a variable called burger
    return orm.selectAll("burgers")
  }

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
    // insertOne: function (cols, vals, callback) {
    //   orm.insertOne("burgers", cols, vals, function (response) {
    //     console.log(response);
    //     callback(response);
    //   });
    // },
  //   update: function (objColVals, condition, callback) {
  //     orm.updateOne("burgers", objColVals, condition, function (res) {
  //       callback(res);
  //     });
  //   },
}

module.exports = burger;