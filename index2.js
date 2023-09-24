/*.........Expression and operators.........*/
/*......There are six operators in javascript
1.Assignment Operators
2.Arithematic Operators
3.Comparison Operators
4.Logical Operators
5.String Operators
6.Conditional Operators
........................*/

//.......Assignment Operator symbol(=).......//
var x=5;
var y=5;
//...condition written in within the special character i.e use (~ + $)...//
console.log(`Is both the x and y are equal: ${x=y}`);
console.log(`Is both the x and y are equal: ${x==y}`);

//..........Comparison Opearator...........//
var a=30;
var b=10;

console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

//...........Logical Operator...............//

/*....1.Logical AND(&&) (It is also called Logical Conjunction).....//

The logical AND operator is true if and only if all of its operands are true......*/

console.log(a>b && b>-50 && b>0);//o/p------->true
console.log(a>b && b>-50 && b<0);//o/p------->false

/*....2.Logical OR(&&) (It is also called Logical DisConjunction).....//

The logical AND operator is false if and only if all of its operands are false......*/

console.log(a<b || b<-50 || b<0);//o/p------->false
console.log(a>b || b>-50 || b<0);//o/p------->true

/*.......Logical NOT(!)........
The logical not is the true if false compliment takes and vise versa....*/

console.log(!true);
console.log(!false);
console.log(!(a>b || b>-50 || b<0));

//......String Concatenation Operator('+')......//

console.log("Hello "+"World");
var myName="Ashish";
console.log(myName + " Sahoo");

//.........CHALLENGE qUSETION..........//
/* 1.What will be the output of 3**3?
   2.What will be the output when we add a number and a string?
   3.Write a program to swap two number?
   4.write a program to swap two number without using third variable?*/

//.........ANSWER.........//

//sol.1
console.log(3**3);//o/p------>3*3*3=27
console.log(3**5);//o/p------>3*3*3*3*3=243
console.log(10 ** -2);//o/p---->1/100
console.log(10 ** -1);//o/p----->1/10

//sol.2
console.log(5 + "Ashish");//o/p---->5Ashish
console.log(5 - "Ashish");//o/p---->NaN

//sol.3
var a=5;
var b=10;

//...output should be a=10 and b=5....//

var temp=a;
a=b;
b=temp;

console.log("The value a : "+a);//o/p---->10
console.log("The value b : "+b);//o/p---->5

//sol.4
var a=5;
var b=10;

a=a+b;//a=15;
b=a-b;//b=5
a=a-b;//a=10

console.log("The value a : "+a);//o/p---->10
console.log("The value b : "+b);//o/p---->5

//..........INTERVIEW QUESTION ..........//

//..Difference between == and ===

var num1=5;
var num2='5';

console.log(typeof(num1));//o/p---->number
console.log(typeof(num2));//o/p----->string

console.log(num1==num2);//o/p--------->true
//....== check only two value are equal are not....//
console.log(num1===num2);//o/p-------->false
//....=== check both two value and its datatype are equal are not....//






