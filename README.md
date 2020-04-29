# Libera Drive - Challenge Accepted!

This is a simple Node.js app including 3 endpoints

app.post("/street", (req, res) => {...});

app.get("/get_streets", (req, res) => {...});

app.get("/closest", (req, res) => {...});

## Running Locally

Make sure you have [Node.js](http://nodejs.org/), [Express 4.17.1](http://expressjs.com/) and [Body-Parser 1.19.0](https://www.npmjs.com/package/body-parser)installed.

### Script approach
```sh
$ git clone https://github.com/Softwavecr/libera.git # or clone your own fork
$ cd libera
$ npm install
$ npm start
```
### Manual approach
In order to run the solution just open the workspace or folder in Visual Studio Code. 
Then run the build Task, or start the debugger, or in the command line go to the folder of the project and run "node LiberaDrive.js"


## Testing and Results
During development, Postman was the testing  tool.

For automated test with newman, start the application via 
`npm start` or `node LiberaDrive.js` 
and then run `node apiContractTest.js`

Many images have been uploaded to the repository as evidence of the execution a testing.
Tests01 - getstreets.png
Tests02 - street.png
Tests03 - closest (returns sorted list by proximity).png
Tests04 - getstreets2.png
Tests05 - street (insert).png
Tests06 - getstreets (notice Washington).png
Tests07 - newman test execution01.png
Tests08 - newman test execution02.png
Tests09 - Run Build Task.png

## Algorithm
The main resource used for this task was the Vector Projection approach as described in stackoverflow/wikipedia et al as seen in the code comments.

`//Based on Vector Orthogonal Projection
//https://www.superprof.es/apuntes/escolar/matematicas/analitica/recta/ecuacion-de-la-recta-que-pasa-por-dos-puntos.html
//https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
//https://www.desmos.com/calculator/md6buy4efz`

Probably the most interesting part was using vector instead of calculating m (slope)

(x-x1)/(x2-x1) = (y-y1)/(y2-y1)

Vector A / Vector C = Vector B / Vector D

I also created and endpoint to get all the streets (/get_streets) so I could verify the insertion.

It was a very fun task!

By [Jairo Guerrero](https://www.linkedin.com/in/jairo-guerrero-lozano-8a0a12115/)
