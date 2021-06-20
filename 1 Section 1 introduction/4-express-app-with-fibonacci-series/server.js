const express = require("express");

const fabObj = require("./math-logic/fibonacci-series");

const app = express();
// http://localhost:3000?number=10
// http://localhost:3000/?number=20
// http://localhost:3000/?number=45
// http://localhost:3000?number=2
// silahkan coba test di multi tab 
app.get("/", (request, response) => {
    try {
        let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
        response.send(`<h1>${number}</h1>`);
    } catch (error) {
        console.log("example params http://localhost:3000?number=10 ")
    }

});

app.listen(3000, () => console.log("Express App is running on PORT : 3000"));