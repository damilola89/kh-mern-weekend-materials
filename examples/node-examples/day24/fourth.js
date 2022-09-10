let util = require('./utility');
let db = require('./utility').db;
console.log(`a = ${util.a}`);

db.store();
db.fetch();
// you can use util.db.store() also as util is referencing to the entire module
util.db.store();