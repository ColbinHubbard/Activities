// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParams(x, y){
  console.log("x =", x);
  console.log("y =" y);
  return x + y;
}

// invoke the function and pass in two numbers
functionWithTwoParams(5, 8);

// invoke the function and pass in more than two numbers
functionWithTwoParams(1, 2, 3, 4);
// invoke the function and pass in only one number
functionWithTwoParams(9);
// change the function to set default values for the parameters
function functionWithTwoParams(x = 5, y = 10) {
  console.log("2nd X = ", x);
  console.log("2nd Y = ", y)
  return x + y;
}

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithTwoParamsRest(x,y, ...z) {
  console.log("3rd X = ", x);
  console.log("2nd Y = " y);
  console.log("thus us the rest operator", z);
}

// again, invoke the function and pass in more than two numbers
functionWithTwoParams(1, 2, 3, 4, 7);
