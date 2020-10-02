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
    // This takes the promise containing the object array of burger information to set up a .then() to pass that information into my view template as another promise 
    burger.selectAll() 
        .then(function (data) {
            let burgers = {
                burgers: data
            };
            //loging this to make sure it matches with data being inserted into my MYSQL promise in my orm.js file.
            // console.log("controller data: ", data); 
            //this will respond to my view template with the "burgers" object containing all of my MYSQL information.
            response.render("index", burgers);
        })
        .catch(function (error) {
            console.log("Inside of catch from GET controller: " + JSON.stringify(error));
        })
});

router.post("/api/burgers", function(request, response) {
    burger.insertOne()
    .then(function (data) {
        let burgers = {
            burgers: data
        };
        request.render("index", burgers);
    })
    .catch(function (error) {
        console.log("Inside of catch from POST controller: " + JSON.stringify(error));
    })
})

module.exports = router;