//---------------------------------------
// require own modules
//---------------------------------------

// The ability to require your own files lets you organize your code in a modular way. It helps you write maintainable code.

console.log("Starting require-own-modules.js");

// requiring own files is similar to requiring built in modules.
// Pass the relative path of the file you require
const own_file = require("./own-file");
// -> logs 'Starting own-file.js

console.log(own_file);
// -> logs {} => It points to an empty object since we are not exporting a module from own-file.js

// After adding module.exports.age = 25 in own-file.js
console.log(`You are ${own_file.age} years young!!`);

// After adding module.exports.addNote function in own-file.js
var note = own_file.addNote();
console.log(note);
// -> logs 'New note', the value returned from the addNote() function

// Challenge in the video
// After adding module.exports.add function in own-file.js
var sum = own_file.add(2, -9);
console.log(sum);
// -> logs -7, which is the correct result.

// After adding module.exports = boom; in own-file.js
// All the above code will fail because the var own_file is now assigned to boom
// own_file()
// -> logs 'Boom Boom!!'
