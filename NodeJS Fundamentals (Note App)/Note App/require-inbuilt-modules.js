//---------------------------------------
// require in-built modules
//---------------------------------------

// Load in a built in node module. You can get a complete list of all built in node modules on NodeJS API docs
// nodejs.org/api => contains a long list of built in node modules
// Select a module, it will display a list of all its methods. Select a method to see how to use it.

// Load fs module => file system module
// require function takes in one argument => the name of the module
// This line tells the require function to take all the content of fs module and assign it to the variable fs
// Now you can use fs to access all the functionalities of the fs module
const fs = require("fs");
// console.log(fs); => logs the contents of fs module. Useful to see the functionalities of a module.

// append some text to a file => just an exercise to get familiar with using built in modules
// fs.appendFile("greetings.txt", "Hello, World!");
// -> [DEP0013] DeprecationWarning: Calling an `asynchronous function without callback is deprecated.]
// To fix this warning, pass in a 3rd argument(a callback function to handle error) to the appendFile method.
// Or, use appendFileSync method, it doesn't require a 3rd argument

fs.appendFile("greetings.txt", "Hello, Wordl!", function(error) {
  if (error) console.log("Unable to write to the file");
});
// If the file doesn't exit, it creates a new file

// Customize the greeting

// Load the os module, get the user name from userInfo method, and use it to customize the greeting
// It's a good practice to load all the modules on top, but I'm doing it here to maintain the flow in the lecture
const os = require("os");
// From here you can start calling the methods on os module

// get the user name
// returns an object containing the user information. The details differ from OS to OS. but they all contain the username
const user = os.userInfo();
console.log(user); // logs { uid: 1000, gid: 1000, username: 'shiva', homedir: '/home/shiva', shell: '/usr/bin/zsh' }

// customize the greeting
fs.appendFile("greetings.txt", `Hello, ${user.username}!`, function(error) {
  if (error) console.log("Unable to write to file");
});
