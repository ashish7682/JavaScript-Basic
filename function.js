/*..............FUNCTION IN JAVASCRIPT..................*/

/* A javascript function is a block of code designed to perform a particular task


/*1.Function Defination
2.Calling a function
3.Function parameter
4.Function Argument
5.Function expression
6.Return KeyWord
7.Anonymous Function*/

//...............................1.Function Defination............................

/*(i)Before we use function , we need to define it
(ii)A function defination is also called function declaration or function statement
(iii)JavaScript functions are defined with the function keyword.*/

function sum()
{
    var a=10,b=20;
    var total=a+b;
    console.log(total);
}

//................................2.Calling a function............................

/*(i)Defining a function does not excute it
(ii)A javaScript function is excuted when it "something" invokes it(calls it).*/

sum();//o/p-30

//......Difference between function parameter vs Function argument...........//
/*(i)Function parameter are the names listed in the function's defination
(ii)Function argument are the real valued passed through it*/


//.................3.Function parameter and 4.function Argument..................//

function add(a,b)
{
    var total=a+b;
    console.log(total);
}

add();//NAN
add(20,30);//50
add(50,50);//100


//.............................5.Function Expression...................................//

// Function expression simply means Create a function and put it into the variable

function sum2(a,b)
{
    var total=a+b;
    console.log(total);
}

var funExp=sum2(5,10);//o/p-15

//................................6.Return Keyword...................................//


/*(i)When javaScript reaches a return statement the function will stop executing 
(ii)The function often compute a return value*/

function sum3(a,b)
{
    return total=a+b;
}

var funExp=sum3(5,25);
console.log(funExp);

