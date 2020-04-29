# Libera Drive - Challenge Accepted!

This is a simple Node.js app including 3 endpoints

1. Insert street:

  `app.post("/street", (req, res) => {...});`

2. Get all streets, (created to verify street insertion):

  `app.get("/get_streets", (req, res) => {...});`

3. Find the nearest street to a point (x,y):

  `app.get("/closest", (req, res) => {...});`

## Running Locally

Make sure you have [Node.js](http://nodejs.org/), [Express 4.17.1](http://expressjs.com/) and [Body-Parser 1.19.0](https://www.npmjs.com/package/body-parser) installed.

### Script approach
```sh
$ git clone https://github.com/Softwavecr/libera.git # or clone your own fork
$ cd libera
$ npm install
$ npm start
```
### Manual approach
In order to run the solution just open the workspace or folder in Visual Studio Code, then run the build Task, or start the debugger. On the other hand, the simplest option is going the project folder and run `node LiberaDrive.js`

## Testing and Results
During development, Postman was the testing  tool, it can be seen in every evidence image (Test*.png).

For automated test with newman, start the application via `npm start` or `node LiberaDrive.js` 
and then run `node apiContractTest.js`

Many images have been uploaded to the repository as evidence of the execution a testing.
1. `Tests01 - getstreets.png`
2. `Tests02 - street.png`
3. `Tests03 - closest (returns sorted list by proximity).png`
4. `Tests04 - getstreets2.png`
5. `Tests05 - street (insert).png`
6. `Tests06 - getstreets (notice Washington).png`
7. `Tests07 - newman test execution01.png`
8. `Tests08 - newman test execution02.png`
9. `Tests09 - Run Build Task.png`

## Algorithm
The main resource used for this task was the Vector Orthogonal Projection, as described in Wikipedia or Stackoverflow et al.

1. [Vector_projection](https://en.wikipedia.org/wiki/Vector_projection)
2. [Ecuacion-de-la-recta-que-pasa-por-dos-puntos](https://www.superprof.es/apuntes/escolar/matematicas/analitica/recta/ecuacion-de-la-recta-que-pasa-por-dos-puntos.html)
3. [Shortest-distance-between-a-point-and-a-line-segment](https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment)
4. [Online Graphic Function Calculator](https://www.desmos.com/calculator/md6buy4efz)

Probably the most interesting part was using vector instead of calculating m (slope)
(x-x1)/(x2-x1) = (y-y1)/(y2-y1)

Vector_A / Vector_C = Vecto_ B / Vector_D

It was a very fun task!

By [Jairo Guerrero](https://www.linkedin.com/in/jairo-guerrero-lozano-8a0a12115/)
