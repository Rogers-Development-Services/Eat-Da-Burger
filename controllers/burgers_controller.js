const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (request, response) {
    // This takes the promise containing the object array of burger information to set up a .then() to pass that information into my view template as another promise 
    burger.selectAll()
        .then(function (result) {
            //loging this to make sure it matches with data being inserted into my MYSQL promise in my orm.js file.
            // console.log("controller data: ", burgers[0].id); 
            //this will respond to my view template with the "burgers" object containing all of my MYSQL information.
            response.render("index", { burgers: result });
        })
        .catch(function (error) {
            console.log("Inside of catch from GET controller: " + (error));
        })
});

router.post("/api/burgers", function (request, response) {
    console.log("POST request", request.body);
    burger.insertOne(request.body)
        .then(function (result) {
            console.log(result.affectedRows + " " + `${request.body.name}` + " inserted!");
            // console.log("POST burger obj information: ", burgers)
            // response.render("index", data);
            response.status(200).redirect("/");
        })
        .catch(function (error) {
            console.log("Inside of catch from POST controller: " + error);
        })
});

router.put("/api/burgers/:id", function (request, response) {
    // console.log("Request Params from PUT request: ", request.params);
    // console.log("id: ", request.params.id);
    burger.updateOne(request.params)  //this id is being drawn from the url, not a body object
        .then(function (result) {
            // console.log("put result: ", result);
            console.log(result.affectedRows + " " + " devoured!");
            response.status(200).end();
            // response.render("index", result);
        })
        .catch(function (error) {
            console.log("Inside of catch from PUT controller: " + error);
        })
})

module.exports = router;