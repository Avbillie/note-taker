const { request } = require("http");
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("../Develop/public/routes/apiRoutes")(app);
require("../Develop/public/routes/htmlRoutes")(app);

app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
})