const { request } = require("http");
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./public/routes/apiRoutes.js")(app);
require("./public/routes/htmlRoutes")(app);

app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
})