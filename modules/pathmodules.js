const path = require('path');
const a = path.basename('C:/temp/myFile.html');
const b = path.dirname('C:/temp/myFile.html');
const c = path.extname(__filename); // __filename is the pathmodule.js file name that contains the path module
console.log(a);
console.log(b);
console.log(c);