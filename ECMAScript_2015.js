//...........................Feature of ECMAScript 2015 is also Known as ES6..................//

//(1)......Let vs Const..........

//........var...........
var myName="Ashish Kumar";
console.log(myName);
myName="Ashish Sahoo";
console.log(myName);

//.......let..........
let myName1="Ashish Kumar";
console.log(myName1);
myName1="Ashish Sahoo";
console.log(myName1);

//.......const..........
/*const myName2="Ashish Kumar";
console.log(myName2);
myName2="Ashish Sahoo";
console.log(myName2);*/

//It gives error as after use const keyword it can not changes 

// var- function scope
// let,const- block scope 

/*function biodata()
{
    const myFirstName="vinod";
    console.log(myFirstName);

    if(true)
    {
        const myLastName="thapa";
        console.log('inner '+myLastName);
        console.log('inner '+myFirstName);
    }
    console.log('innerOuter '+myLastName);//It will be give error
}

biodata();//..............calling function..................*/

//.............(2)Template Literal...........

//JavaScript proogram to print table of for a given number (12)?

for(let i=1;i<=10;i++)
{
    let tableOf=12;
    console.log(tableOf+" * "+i+" = "+(tableOf*i));
}

//Another way to print 12 table with the help of template literal

for(let i=1;i<=10;i++)
{
    let tableOf=12;
    console.log(`${tableOf} * ${i} =  ${tableOf*i}`);
}

//.................(3)Default Parameter...................

// Default function Parameters allow named parameters to be intialized with default values if no value or undefined is passed

function mult(a,b)
{
   return a*b;
}


console.log(mult(5));//o/p-NaN
console.log(mult(3,5));//o/p-15


//..............(4)Fat Arrow Function......................

//👻Normal way of writing function 

console.log(sum());
function sum()
{
    let a=5;b=6;
    let sum=a+b;
    return `The Sum of the two number is ${sum}`;
}
// console.log(sum());


//👻How to convert it into fat arrow function 

// console.log(sum1()); It will be give error
const sum1 = () =>
{
    let a=5;b=6;
    let sum1=a+b;
    return `The Sum of the two number is ${sum1}`;
}
console.log(sum1());

//Another way of Fat Arrow function 
const sum2 = ()=> `The sum of the two number is ${(a=5)+(b=6)}`;

console.log(sum2());