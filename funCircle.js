let r = prompt("enter the radius of circle");
let PI = 3.14;
let areaOfCircle;
function formula(r) {
  areaOfCircle = PI * parseInt(r) * parseInt(r);
  return areaOfCircle;
}
var circle = formula(r);
console.log("The Area of Circle is :" + circle);
