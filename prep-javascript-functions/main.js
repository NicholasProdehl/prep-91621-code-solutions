function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('That many hours is ', minutes, ' minutes.');

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greeting = getGreeting('Nic');
console.log(greeting);

function addAndMultiplyBy5(n1, n2) {
  return (n1 + n2) * 5;
}
var sum2;
sum2 = addAndMultiplyBy5(5, 10);
console.log(sum2);

function multiplyAndDivideBy5(n1, n2) {
  return (n1 * n2) / 5;
}

var sum3;
sum3 = multiplyAndDivideBy5(35, 10);
console.log(sum3);

function subtractTwoNumbers(n1, n2) {
  return n1 - n2;
}
var sum4 = subtractTwoNumbers(22, 7);
console.log(sum4);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var sum5 = getCircleCircumference(5);
console.log(sum5);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
var cubed = cube(5);
console.log(cubed);
