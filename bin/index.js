#!/usr/bin/env node

var app = require('../app.js');


var cwd = process.cwd()

var file = path.join(cwd, process.argv[2]);

app.run(file)