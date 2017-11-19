// to indicate the execution of this file
console.log("Starting own-file.js");

// Inside of all of our node files, we have access to a variable called `module`
console.log(module);
// -> logs
// Module {
//     id: '.',
//     exports: {},
//     parent: null,
//     filename: '/home/shiva/projects/nodejs-course-notes/NodeJS Fundamentals (Note App)/Note App/own-file.js',
//     loaded: false,
//     children: [],
//     paths:
//      [ '/home/shiva/projects/nodejs-course-notes/NodeJS Fundamentals (Note App)/Note App/node_modules',
//        '/home/shiva/projects/nodejs-course-notes/NodeJS Fundamentals (Note App)/node_modules',
//        '/home/shiva/projects/nodejs-course-notes/node_modules',
//        '/home/shiva/projects/node_modules',
//        '/home/shiva/node_modules',
//        '/home/node_modules',
//        '/node_modules' ] }
//
// The way they have set the path is clever
// The only property we'll use in this course is `exports` (of type Object)

// Exploring the use of `exports` object
module.exports.age = 25;

// We won't be exporting static values from a module. The real goal of modules is to export functions
module.exports.addNote = () => {
  console.log("Add note called");
  return "New note";
};

// Challenge in the video
// Create a function that adds two numbers and export it
module.exports.add = (num1, num2) => num1 + num2;

// Trying out things

// Create a function, and assign it to module.exports
// Log it in the file that requires this file, and see the result

function boom() {
  console.log("Boom Boom!!");
}

// module.exports = boom;
// This assigns the function boom to the var own_file.
// To execute boom(), call own_file()
