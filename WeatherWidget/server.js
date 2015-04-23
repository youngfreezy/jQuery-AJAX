var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

    
app.listen(3080);
console.log('working! check port 3080')