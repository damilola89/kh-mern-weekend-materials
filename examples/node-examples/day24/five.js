// importing os module
let os = require('os');

// architecture of the os
console.log(`Architecture: ${os.arch()}`);
// platform
console.log(`Platform: ${os.platform()}`)
// release
console.log(`Release: ${os.release()}`);
// host name
console.log(`Host: ${os.hostname()}`);