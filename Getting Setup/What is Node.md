# What is node?

* JavaScript runtime built on Chrome's `V8` JS engine (written in C++)
* Takes your JS code, compiles it into machine code, and executes it.
* Runs JS code outside browser environment
* Can create web servers, work with file system
* You can REPL inside node process on a terminal (just fire up the terminal, run `node`)
* `window` => global object in browser environment. Every variable you create lives inside the `window` (TODO: verify)
* `global` => global object in node environment, analogous to `window` in browser environment
* `document` => stores a reference to the `DOM`
* `process` => analogous to `document` in browser environment.
* Node[`global`, `process`] == Browser[`window`, `document`]

## From the official website:
> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.