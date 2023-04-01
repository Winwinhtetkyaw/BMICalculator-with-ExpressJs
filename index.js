const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static('.'));

app.get('/', (req , res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req , res) => {
    var weight = Number(req.body.lbweight);
    var height = Number(req.body.inheight);

    // console.log(typeof(weight));
    // console.log(typeof(height));

    var result = 703 * weight / (height * height);

    res.send("The result is " + result);
    res.send("Thanks");
});

app.listen(5000, () => {
    console.log("The app is running on port 5000");
});