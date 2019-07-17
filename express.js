var express = require('express');
var app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})
app.get('/user_research', function(req, res) {
    res.sendFile(__dirname + '/json/user_research.json');
})

app.listen('8000', function() {
    console.log(123456)
});