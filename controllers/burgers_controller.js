const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (request, response) {
    burger.selectAll(function (data) {
        let burgers = {
            burgers: data
        };
        console.log(burgers);
        response.render("index", burgers);
    })
});

// router.get("/", function (request, response) {
//     burger.selectAll()
//         .then(function (data) {
//             let burgers = {
//                 burgers: data
//             };
//             console.log(data);
//             response.render("index", burgers);
//         })
//         .catch(function (error) {
//             console.log("Inside of catch from controller: " + error);
//             console.log(JSON.stringify(error));
//         })
// });

module.exports = router;