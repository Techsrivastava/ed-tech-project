const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./router/user.router');



const app = express();


app.use(body_parser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', userRouter);



module.exports = app;