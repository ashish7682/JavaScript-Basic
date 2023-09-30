/*..............Math Object in JavaScript..............*/

//.......PI() method.......//

console.log(Math.PI);

//........Math.round().......//

//it returns the value of x rounded to its nearest integer

let num1=10.2565;
console.log(Math.round(num1));//10

let num2=10.512;
console.log(Math.round(num2));//11

let num3=10.914;
console.log(Math.round(num3));//11

//............Math.pow() method...........//

console.log(Math.pow(2,3));//8
console.log(2**3);//8

//..............Math.sqrt() method.........//

console.log(Math.sqrt(25));//5
console.log(Math.sqrt(81));//9
console.log(Math.sqrt(66));//8.1241

//..............Math..abs() method...........//

//It returns the absolute (positive) value of a number

console.log(Math.abs(-55));//55
console.log(Math.abs(-55.5));//55.5
console.log(Math.abs(-956));//956
console.log(Math.abs(4-6));//2

//..............Math.ceil() method...........//

//Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.51));//5
console.log(Math.round(4.51));//5
console.log(Math.ceil(99.1));//100
console.log(Math.round(99.1));//9

//................Math.floor() method............//

//Math.floor(x) returns the value of x rounded down to its nearest integer

console.log(Math.floor(4.7));//4
console.log(Math.floor(99.1));//99

//...............Math.min() method................//

//Math.min() can be used to find the lowest value in a list of argument

console.log(Math.min(0,150,30,20,-8,-200));//-200

//...............Math.max() method................//

//Math.max() can be used to find the highest value in a list of argument

console.log(Math.max(0,150,30,20,-8,-200));//150

//...............Math.random() method.............//

//It returns a random number between 0 (inclusive) and 1 - 9

console.log(Math.floor(Math.random()*10));

//..............Math.trunc() method.............//

//The trunc() method returns the integer part of a number

console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.1));
