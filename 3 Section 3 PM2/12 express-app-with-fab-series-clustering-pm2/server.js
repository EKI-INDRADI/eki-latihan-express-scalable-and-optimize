const express = require("express");

const fabObj = require("./math-logic/fibonacci-series");
const app = express();

//http://localhost:3000?number=10
app.get("/", (request, response) => {
    console.log(`Worker ID is - ${process.pid}`);
    let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
    response.send(`<h1>${number}</h1>`);
});

app.listen(3000, () => console.log("Express App is running on PORT : 3000"));
