// #!/usr/bin/env node
var app = require('./../app');
var path = require('path');

var cwd = process.cwd();
var filePath = path.join(cwd, process.argv[2]);

console.log(filePath + "**");

app(filePath);