# Why Should I Use Node?

## From the official website:
> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

### Dissecting the definition and understanding what each of those terms mean:

1. #### Non Blocking I/O
    - `I/O` => Reading/writing to the database, Changing files on filesystem, making API requests, etc. It takes time.
    - `Non-blocking I/O` => one I/O operation doesn't block other I/O operation. This reduces the total time. You just kick off the I/O operation and continue with the execution, you don't have to wait until the operation finishes.
        - Using non-blocking I/O doesn't make our I/O operations any faster. What it does is it lets us run more than one I/O operations simultaneously.
    - `Blocking I/O` => I/O operations execute serially. The application is blocked from executing further until the current I/O operation is completed. It results in increased idle time, which in turn slows down our application. 

![Blocking vs Non-blocking I/O]('../images/blocking-vs-non-blocking-io.png' 'Blocking vs Non-blocking I/O')

2. #### Event driven
    - You'll learn more about event driven in future lectures. No information provided in this lecture.

3. #### npm
    - npm is the largest ecosystem of open source libraries. You can focus on writing the actual code for your application rather than building the infrastructur for it.
    - If it is a generic node problem, there is a high chance someone else might have already solved it, and there is an npm module for that.
    - Every npm module is written in a non-blocking fashion.