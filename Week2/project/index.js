const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(middleware1);
// Global middleware
let numberOfRequest = 0;
function middleware1(req, res, next) {
    numberOfRequest = numberOfRequest + 1;
    console.log(numberOfRequest);
    next();
}

function calculateSum(counter) {
    let sum = 0;
    for (let i = 0; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function calculateMul(counter) {
    let mul = 1;
    for (let i = 1; i <= counter; i++) {
        mul = mul * i;
    }
    return mul;
}

function handleCalculate(req, res) {

    var counter = req.query.counter;
    if(counter < 1000){
        var calculatedMul = calculateMul(counter);
        var calculatedSum = calculateSum(counter);
        var answerObject = {
        sum : calculatedSum,
        mul : calculatedMul}
        res.status(200).json(answerObject);
    }else{
        res.status(411).send("You have sent very big number");
    }
    
    
}

function getPage(req , res){
    res.send(__dirname + "/index.html")
}






app.get("/", handleCalculate);
app.get("/getPage", getPage)

app.listen(port, () => {
    console.log(`server running on port number ${port}`);
});
