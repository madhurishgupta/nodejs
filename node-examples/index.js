var rect = require("./rectangle");

function solveRect(l,b) {
  console.log("l = "+l+", b = "+b);

  if(l<=0 || b<=0) {
    console.log("Dimensions must be positive");
  }
  else {
    console.log("The area of rectangle is " + rect.area(l,b));
    console.log("The perimeter of rectangle is "+ rect.perimeter(l,b));
  }
}

solveRect(2,3);
solveRect(3,2);
