//---------------------------------------
// require 3rd party modules
//---------------------------------------

// There is a huge community of developers who have created thousands of packages for node
// npm modules are proven to work. Others have used it, and documented it.
// Earlier, npm stood for node package manager. Now it is more than a package manager for node. There are a lot of on-going jokes on the expansion of npm.

// We define all our 3rd party modules inside package.json
// When you run `npm install`, it will install all the dependencies specified in package.json

// requiring 3rd modules is same as requiring built in modules. You just provide the name of the module to the require function
// e.g. const _ = require('lodash');

// Order of looking for modules
// 1. It will look for core modules (built in modules)
// 2. It will search the node_modules folder

// _.uniq() => removes duplicates from an array and returns the filtered array

// The structure of node_modules depends on the version of npm.
// Do not include the node_modules folder in your project. Include package.json, and run `npm install` to generate the node_modules folder.
