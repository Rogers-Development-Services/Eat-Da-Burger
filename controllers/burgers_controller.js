const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// router.get("/", function (request, response) {
//     burger.selectAll(function (data) {
//         let burgers = {
//             burgers: data
//         };
//         console.log(burgers);
//         response.render("index", burgers);
//     })
// });

// router.post("/api/burgers", function(request, response) {
//     console.log(request.body);
//     burger.insertOne(
//         ["burger_name"], //decorates for the column names to be specified
//         [request.body.burger], //gives value
//         function(result) {
//       // Send back the ID of the new burger
//       response.json({ id: result.insertId });
//     });
//   });

router.get("/", function (request, response) {
    burger.selectAll()
    // var data = await burger.selectAll();
    // console.log(data);
        .then(function (data) {
            let burgers = {
                burgers: data
            };
            console.log("controller data: ", data);
            response.render("index", burgers); //this will respond to view
        })
        .catch(function (error) {
            console.log("Inside of catch from controller: " + error);
            console.log(JSON.stringify(error));
        })
});

module.exports = router;