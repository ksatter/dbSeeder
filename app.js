var execSQL = require("exec-sql");
var path = require('path');


execSQL.connect({
    'database': 'mysql',
    'user': 'root',
    'password': '1113406'
});

var cwd = process.cwd();
var filePath = path.join(cwd, process.argv[2]);

console.log(filePath + "**")


function run(){
    execSQL.executeFile(filePath, function(err){
        if (err) throw err;
        execSQL.disconnect();
        console.log('Done!');
    });
}

run()
//module.exports = run()
