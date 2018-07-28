var execSQL = require("exec-sql");
var path = require("path")

execSQL.connect({
    'database': 'mysql',
    'user': 'root',
    'password': '1113406'
});

// execSQL.executeFile(process.argv[2])


var cwd = process.cwd()

var file = path.join(cwd, process.argv[2]);

function run(){
    execSQL.executeFile(file, function(err){
        if (err) throw err;
        execSQL.disconnect();
        console.log('Done!');
    })
}

module.exports = run
