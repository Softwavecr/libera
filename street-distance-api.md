# Back End Engineering Challenge -- Libera Drive

Libera-Drive is building a quick prototype for an Uber/Lift like system and needs a quick REST API to build out the prototype.  This API will focus on finding the 'street' closest to the input user coordinates.  We will use (0,0) is the center, X is the horizontal, Y is the vertical.  
- Streets will be input as a beginning point and end point with a name
- User location will be a point in the system
- the API should be build to:
  - add a street with a name using 2 points (POST baseurl/street - with the body being a street)
  ```
  { 
    name: string
    start: [x,y]
    end: [x,y]
  }
  ```
  for example: 
  ```
  { 
    name: Main
    start: [0,0]
    end: [10,30.5]
  }
  ```

  - query for the street(s) closest to a given point (GET baseurl/closest?x=0&y=23)
  should return the closest street (or an array of the closest streets)

## Requirements:

- Do not include a database (for this iteration store all your data 'in-memory')
- Create tests (either physically or suggest in your README) for any common issues
- Handle errors 

- develop your solution as a complete package that will be run by the Libera team
  - Include a readme and/or instructions for installing and running
  - Induced instructions on how to run your included test or what those tests are
  - Document any assumptions you made and issues you encountered

## Useful formula
You may find the following formulas useful:

- distance from a point (x0,y0) to the line ax + by + c = 0 is:
```
d = ABS( a*x0 + b*y0 + c) / SQRT( a^2 + b^2)
```
https://urldefense.proofpoint.com/v2/url?u=https-3A__brilliant.org_wiki_dot-2Dproduct-2Ddistance-2Dbetween-2Dpoint-2Dand-2Da-2Dline_&d=DwIGAg&c=BioHiDP8cpFFEOWoiyRJQw&r=527QnTCosnJbPObT6X6A1jh7DAysoEJnGvCNz1SPVZ4&m=smeep6sXcmM2iByJV8fv17QjgAGymUIzT5k-N2yE0_k&s=Src1FH-3wKyQoGe8k-sUxid2We3i4IQlURFnpedAotE&e= 

- slope (m) of a line through points (x1,y1) and (x2,y2)
```
m = (y2-y1) / (x2-x1)
```
- point slope formula of a line
```
y - y1 = m * (x - x1)
```
https://urldefense.proofpoint.com/v2/url?u=https-3A__www.algebra.com_algebra_homework_Length-2Dand-2Ddistance_Length-2Dand-2Ddistance.faq.question.620573.html&d=DwIGAg&c=BioHiDP8cpFFEOWoiyRJQw&r=527QnTCosnJbPObT6X6A1jh7DAysoEJnGvCNz1SPVZ4&m=smeep6sXcmM2iByJV8fv17QjgAGymUIzT5k-N2yE0_k&s=x3K9tKM_xyuoRer88hwIDZjY3c_uhgKGzeGn2bYrQ5g&e= 
