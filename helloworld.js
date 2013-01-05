// hello world
console.log("Hello World");


// math
var price = 150;
var tax = 7;
var total = price + (price * (tax/100));
console.log("Total $" + total);


// arrays
var colors = ['red', 'blue'];
colors.push('white');
console.log(colors);


// objects
var employee = {name: 'john doe', department: 'IT'};
console.log(employee);


// functions
function SaySomething(message)
{
  console.log("SaySomething: " + message);
}

SaySomething('woo-hoo');