// #!/usr/bin/env node
var path = require('path');
var app = require('./../app');


var cwd = process.cwd();
var filePath = path.join(cwd, process.argv[2]);

console.log(filePath + "**");

app(filePath);