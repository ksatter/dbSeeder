#!/usr/bin/env node
var path = require("path");

var app = require('../app.js');

var cwd = process.cwd();
console.log(cwd) 
//var file = path.join(cwd, process.argv[2]);

app.run(file)