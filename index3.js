//..............Control statement and loops...................
/*   1.if...else
   2.Switch Statement
   3.While Loop
   4.Do-While Loop
   5.For Loop
   6.For in Loop
   7.For of Loop
   8.Conditional(ternary) Operator*/

/*...........1.if..else..........*/

/*.....Problem 1.....
  if raining=raincoat
  else  no raincoat*/

var tommorrow='rainy';
if(tommorrow=='rainy')
{
    console.log('take a raincoat');
}else
{
    console.log('no need to take a raincoat');
}

var tommorrow='sunny';
if(tommorrow=='rainy')
{
    console.log('take a raincoat');
}else
{
    console.log('no need to take a raincoat');
}

/*..........Problem 2.........
    W.A.P a year is leap or not */

var year=1900;//1900 is not a leap year but 2000 is a leap year
if(year%4==0 && year%100!=0 || year%400==0)
{
    console.log('It is a leap year');
}else 
{
    console.log('It is not a leap year');
}

/*..........What is truthy and falsy values in JavaScript..............
  We have totally 5 falsy values in javaScript i.e (i)0
                                                   (ii)""
                                                   (iii)undefined
                                                   (iv)null
                                                   (v)false  
   if these word are available in if statement it always excute the else part       */

   if(score=0)
   {
    console.log("OMG,We Loss the game 😔");
   }else
   {
     console.log("We won the game 😆");
   }

   if(score=5)
   {
    console.log("OMG,We Loss the game 😔");
   }else
   {
     console.log("We won the game 😆");
   }

   if(undefined)
   {
    console.log("OMG,We Loss the game 😔");
   }else
   {
     console.log("We won the game 😆");
   }

   if(true)
   {
    console.log("OMG,We Loss the game 😔");
   }else
   {
     console.log("We won the game 😆");
   }

/*.............2.Ternary Operator.........
 This conditional operator take 3 operand....*/

 var age=17;
 if(age>=18)
 {
    console.log("You are eligible to vote");
 }else
 {
    console.log("You are not eligible to vote");
 }

//........This can be written in the help of ternary operator..........//
console.log((age>=18)?"You can vote":"You are not eligible to vote");


/*.............3.Switch Statement.............
1st Without break statement Find the area of circle, triangle and rectangle...*/

var area="circle";
var PI=3.142,l=5,b=4,r=3;
if(area=="circle")
{
    console.log("The area of circle is "+2*PI*r);
}else if(area=="triangle")
{
    console.log("The area of triangle is "+(l*b)/2);
}else if(area=="rectangle")
{
    console.log("The area of rectangle is "+l*b);
}else
{
    console.log("Invalid Input ");
}

var area="triangle";
var PI=3.142,l=5,b=4,r=3;
if(area=="circle")
{
    console.log("The area of circle is "+2*PI*r);
}else if(area=="triangle")
{
    console.log("The area of triangle is "+(l*b)/2);
}else if(area=="rectangle")
{
    console.log("The area of rectangle is "+l*b);
}else
{
    console.log("Invalid Input ");
}

/*break statement terminates the current loop,switch,or label statement and transfers */
//.........................Using switch Statement........................//

var area="circle";
var PI=3.142,l=5,b=4,r=3;
switch(area)
{
    case 'circle':
        console.log("The area of circle is :"+PI*2*r);
        break;
    case 'triangle':
        console.log("The area of triangle is :"+0.5*l*b);
        break;
    case 'rectangle':
        console.log("The area of rectangle is :"+l*b);
        break;
    case 'square':
        console.log("The area of square is :"+ l*l);
        break;
    default:
        console.log("please enter valid data");
}

/*...........While Loop..................*/

// //Infinity Loop
// var num=10;
// //block scope
// while(num<=10)
// {
//     console.log(num);
//     num++;
// }

var num=1;
while(num<=10)
{
    console.log(num);
    num++;
}


/*..........do-While Loop..........*/
var num=0;
do{
    console.log(num);
    num++;
}while(num<=10);

/*..........For Loop...............*/
var num=0;
for(var num=0;num<=10;num++)
{
    console.log(num);
}

//Q.JavaScript program to print table for given number (8)

for(var num=1;num<=10;num++)
{
    var tableOf=8;
    console.log(tableOf+" * "+num+ " = "+(tableOf*num));
}

