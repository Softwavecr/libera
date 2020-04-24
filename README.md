# libera
In order to run the solution just open the workspace or folder in Visual Studio Code. 
Then run the build Task, or start the debugger, or in the command line go to the folder of the project and run "node LiberaDrive.js"

--

The main resource used for this task was the Vector Projection approach as described in stackoverflow/wikipedia et al as seen in the code comments.
//Based on Vector Orthogonal Projection
//https://www.superprof.es/apuntes/escolar/matematicas/analitica/recta/ecuacion-de-la-recta-que-pasa-por-dos-puntos.html
//https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
//https://www.desmos.com/calculator/md6buy4efz

Probably the most interesting part was using vector instead of calculating m (slope)

(x-x1)/(x2-x1) = (y-y1)/(y2-y1)

Vector A / Vector C = Vector B / Vector D

I also created and endpoint to get all the streets (/get_streets) so I could verify the insertion.

It was a very fun task!


https://www.linkedin.com/in/jairo-guerrero-lozano-8a0a12115/
