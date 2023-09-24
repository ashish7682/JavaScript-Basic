console.log("Hello World");

//......To open terminal we use ---------->ctrl + ~(backlit)........//
//.......All comment in javaScript we use--------->ctrl + ?(question mark)........//


/*................Values and Variable in JavaScript...........*/

var myName="Ashish";
var myAge=22;
var _myAge=23;//..........variable name not contain any special character............//
var $myAge=24;//...but 1st letter of a variable  not be a number.......//

console.log(myName);
console.log(myAge);
console.log(_myAge);
console.log($myAge);

/*............Six Datatype that are primitive.........
1.undefined:typeof instance === "undefined"
2.Boolean:typeof instance === "boolean"
3.Number:typeof instance === "number"
4.String:typeof instance === "string"
5.BigInt:typeof instance === "bigint"
6.Symbol:typeof instance === "symbol"............*/

var myName="Ashish";
console.log(myName);

//---------typeof operator-------//
console.log(typeof(myName));

var myAge=23;
console.log(myAge);

//---------typeof operator-------//
console.log(typeof(myAge));

var iAmAshish=true;
console.log(iAmAshish);

//---------typeof operator-------//
console.log(typeof(iAmAshish));

//........Datatype of Practice.......//
console.log(10+"20");//-------->Result-1020
console.log(9-"5");//-------->Result-4(it is a bug)
console.log("Java"+"Script");//-------->JavaScript
console.log(" "+" ");//-------->Result-blank
console.log(" "+0);//-------->Result-0
console.log("Ashish"-"Kumar");//-------->Result-NaN
console.log(true + true);//-------->Result-2(In javaScript true=1;false=0)
console.log(true + false);//-------->Result-1
console.log(false + true);//-------->Result-1
console.log(false - true);//-------->Result=(-1)

//...............InterView Question 1.........//
//-------------Diff between null vs Defined........//

var iAmUseless=null;
console.log(iAmUseless);//.......>Result-null

var iAmStandBy;
console.log(iAmStandBy);//.......>Result-undefined

console.log(typeof(iAmUseless));//.......>Result-object(It is also a bug.)
console.log(typeof(iAmStandBy));

//............NaN Property.............//
var myPhoneNumber = 8338096984;
var myName="Ashish";

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

if(isNaN(myName))
{
    console.log("Please Entrer a valid Phone No.");
}

/* 
1.NaN ≡ NaN;----------->O/P-false
2.Number.NaN ≡ NaN;----------->O/P-false
isNaN(NaN);----------->O/P-true
isNaN(Number.NaN);----------->O/P-true
Number.isNaN(NaN);----------->O/P-true
*/










