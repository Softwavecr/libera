  const express = require("express");
  const app = express();
  const bodyparser = require("body-parser");
  const port = process.env.PORT || 3200;

  // middleware
  app.use(bodyparser.json()); 
  app.use(bodyparser.urlencoded({ extended: false }));

  const street = {
      name: " ",
      startx: 0.1,starty: 0.1,
      endx: 0.1,endy: 0.1
  };

  var px;
  var py;
  var jStreets = [];

  var street1 = {  name: "Heredia",  startx: 12.1,  starty: 24.3,  endx: 40.4,  endy: 40.9 };
  jStreets.push(street1);
  street1 = {  name: "Alajuela",  startx: 15.1,  starty: 30.3,  endx: 23.4,  endy: 35.9 };
  jStreets.push(street1);
  street1 = {  name: "Limon",  startx: 20.1,  starty: 72.3,  endx: 31.4,  endy: 49.9 };
  jStreets.push(street1);
  street1 = {  name: "Cartago",  startx: 14.1,  starty: 23.3,  endx: 35.4,  endy: 24.9 };
  jStreets.push(street1);
  street1 = {  name: "Guanacaste",  startx: 13.1,  starty: 21.3,  endx: 33.4,  endy: 14.9 };
  jStreets.push(street1);
  street1 = {  name: "Puntarenas",  startx: 27.1,  starty: 30.3,  endx: 10.4,  endy: 22.9 };
  jStreets.push(street1);
  street1 = {  name: "San Jose",  startx: 17.1,  starty: 20.3,  endx: 30.4,  endy: 23.9 };
  jStreets.push(street1);


  /**
   * creating a New Street
   */
  app.post("/street", (req, res) => {
    var newstreet = Object.assign({}, street);
    newstreet = req.body;

      newstreet['name'] = req.body['name'];
      newstreet['startx'] = Number(req.body['startx']);
      newstreet['starty'] = Number(req.body['starty']);
      newstreet['endx'] = Number(req.body['endx']); 
      newstreet['endy'] = Number(req.body['endy']); 

      console.log('Inserting...' +  new Date());
      console.log(newstreet);

      if (newstreet.name.length>0 && !isNaN(newstreet['startx']) && newstreet['startx']>0 && !isNaN(newstreet['starty']) && newstreet['starty']>0 && 
      !isNaN(newstreet['endx']) && newstreet['endx'] > 0 && !isNaN(newstreet['endy']) && newstreet['endy']> 0 ) {
        jStreets.push(newstreet);
        res.status(200).json({
          message: "Street created successfully "+ new Date()
        });
      } else {
        res.status(401).json({
          message: "Invalid street creation " + new Date()
        });
      }
    });

  /**
   *  Getting All Streets
   */
    app.get("/get_streets", (req, res) => {
      console.log('get_streets...' +  new Date());
      res.status(200).send(jStreets);
    });  

  /**
   *  Getting Closest street
   */
  app.get("/closest", (req, res) => {
      px = Number(req.query['x']);
      py = Number(req.query['y']);

      if(isNaN(px) ||  isNaN(py) || px == 0 || py == 0 ) {
        res.status(401).json({
          message: "Invalid input: (X,Y) coordinates are required." + new Date()
        });//var px =  Math.floor(Math.random() * 10)+1;//var py = px/3;//console.log('px='+px+', py='+py);    
      }
  else{
      console.log('Searching...');
      var jSortedStreetList = jStreets.map(myGetClosestFunction);
      jSortedStreetList.sort(function(a, b){return a.distance - b.distance});
      console.log('Search and sort completed'); 
      res.status(200).send(jSortedStreetList);
  }
  });  

//Based on Vector Orthogonal Projection
//https://www.superprof.es/apuntes/escolar/matematicas/analitica/recta/ecuacion-de-la-recta-que-pasa-por-dos-puntos.html
//https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
//https://www.desmos.com/calculator/md6buy4efz
  function pDistance(x, y, x1, y1, x2, y2) {
    var A = x - x1;
    var B = y - y1;
    var C = x2 - x1;
    var D = y2 - y1;

    var dot = A * C + B * D;
    var len_sq = C * C + D * D;
    var param = -1;
    if (len_sq != 0) //in case of 0 length line
        param = dot / len_sq;

    var xx, yy;

    if (param < 0) {
      xx = x1;
      yy = y1;
    }
    else if (param > 1) {
      xx = x2;
      yy = y2;
    }
    else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }

    var dx = x - xx;
    var dy = y - yy;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function myGetClosestFunction(value, index, array) {//console.log(value);

    var x1 = value.startx;
    var x2 = value.endx;
    var y1 = value.starty;
    var y2 = value.endy;

    var res = pDistance(px,py,x1,x2,y1,y2);

    var obj = {
      name:  value.name,
      distance: res
    };
    return obj;
  }

  app.listen(port, () => {
    console.log(`libera running at port ${port}!`);
  });
      