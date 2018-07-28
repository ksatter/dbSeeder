var execSQL = require("exec-sql");


execSQL.connect({
    'database': 'mysql',
    'user': 'root',
    'password': '1113406'
});






module.exports = function(filePath){
    execSQL.executeFile(filePath, function(err){
        if (err) throw err;
        execSQL.disconnect();
        console.log('Done!');
    });
}