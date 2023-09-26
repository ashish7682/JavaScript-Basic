/*.................👉 Arrays in JavaScript................*/

//when we use var , we can stored only one value at a time.

var friend1='Ramesh';
var friend2='Arjun';
var friend3='vishal';

// var myFriends = ['Ramesh',22,male,'Arjun',21,male,'Vishal',24,male,true,52];

/*(i)when we feel like storing multiple values in one variable then instead of var we will use Array
(ii)In javaScript we have an Array class and arrays are the prototype of the class

1.Travresal of array
2.Searching and filter in an array
3.How to Sort and Compare an Array
4.How to insert,Add,Replace and Delete element from an array(CRUD)
5.Map(),Reduce(),Filter().........*/

//...........................(1)Traversal of Array..........................

var myFriends=['Vinod','Ramesh','Arjun','Vishal'];

//..........print all element in array.........
console.log(myFriends[0]);//........o/p-Vinod
console.log(myFriends[1]);//........o/p-Ramesh
console.log(myFriends[2]);//........o/p-Arjun
console.log(myFriends[3]);//........o/p-Vishal
console.log(myFriends[4]);//........o/p-Undefined

//.............Print the length of array........
console.log(myFriends.length);//.....o/p-4

//.............we use for loop to navigate.........
var myFriends=['Vinod','Ramesh','Arjun','Vishal'];
for(var i=0;i<myFriends.length;i++)
{
   console.log(myFriends[i]);
}

//............After ES6 we have for.....in and for......of loop too

//...............for......in loop..............
var myFriends=['Vinod','Ramesh','Arjun','Vishal'];
for(let elements in myFriends)
{
    console.log(elements);//This will print the the index number of array in squential manner
}

//..............for.......of loop.............
var myFriends=['Vinod','Ramesh','Arjun','Vishal'];
for(let elements of myFriends)
{
    console.log(elements);//This will print each element of the array in squential order
}

//.....Array.prototype.forEach()......
//......calls a function for each element in the array..........

var myFriends=['Vinod','Ramesh','Arjun','Vishal'];
myFriends.forEach(function(element,index,Array)
{
   console.log("element : "+ element +" index : "+ index + "  Array : "+ Array);
});


//.........Array using Fat Arrow function.............

myFriends.forEach((element,index,Array)=>{
    console.log( element +" index: "+ index + " " +Array);
});

//..........We can use with the help of new KeyWord............

const cars=new Array("Saab","volvo","BMW");
console.log(cars);

//..............Adding array element.............
const fruits=["Banana","Orange","Apple"];
fruits.push("Lemon");
console.log(fruits);//Banana Orange Apple Lemon 

fruits[fruits.length-1]="Lemon";
console.log(fruits);//Banana Orange Apple

fruits[0]="Lemon";
console.log(fruits);// Lemon Orange Apple

fruits[6]="Lemon";
console.log(fruits);//Create undefinded hole in the fruits

/*...........Array Method in JavaScript.............

1.Array Length                        6.Array unshift()
2.Array toString()                    7.Array join()
3.Array pop()                         8.Array delete()
4.Array push()                        9.Array concat()
5.Array shift()                      10.Array flat()
11.Array splice()                    12.Array slice()*/

//1.Array Length
const fruits1=["Banana","Orange","Apple","Mango"];
console.log(fruits1.length);

//2.Array toString()
const fruits2=["Banana","Orange","Apple","Mango"];
console.log(fruits2.toString());

/*3.Array join()

(i)The join() method also joins all array elements into a string
(ii)It behaves just like toString(), but in addition you can specify the separator:*/
 
const fruits3=["Banana","Orange","Apple","Mango"];
console.log(fruits3.join(" * "));

/*4.Array pop()
 (i)This method remove the last element of the array..*/

 const fruits4=["Banana","Orange","Apple","Mango"];
 console.log(fruits4.pop());

 /*5.Array push()
   (i)The push() method adds a new element to an array (at the end):*/

const fruits5=["Banana","Orange","Apple","Mango"];
fruits5.push("kiwi")
console.log(fruits5);
console.log(fruits5.length);//This return the new array length

/*6.Array Shift()
    (i)Shifting is equivalent to popping, but working on the first element instead of the last.
    (ii)The shift() method removes the first array element and "shifts" all other elements to a lower index.*/

const fruits6=["Banana","Orange","Apple","Mango"];
fruits6.shift();
console.log(fruits6);

/*7.Array Unshift()
    (i)The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:*/

const fruits7=["Banana","Orange","Apple","Mango"];
fruits7.unshift("Lemon");
console.log(fruits7);

const myNumbers=[1,2,3,4];
myNumbers.unshift(6,7);
console.log(myNumbers);

/*8.Changing Element 
   (i)Array element are accessed using their index number */

   const fruits8=["Banana","Orange","Apple","Mango"];
   fruits8[1]="Kiwi";
   console.log(fruits8);

/*9.Array Delete
   (i)Array elements can be deleted using the JavaScript operator delete.
   (ii)Using delete leaves undefined holes in the array
   (iii)Use pop() or shift() instead.*/

   const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
   delete fruits9[0];
   console.log(fruits9);

/*10.Array concatening()
  (i)The concat() method creates a new array by merging (concatenating) existing arrays:
  (ii)The concat() method does not change the existing arrays. It always returns a new array.*/

const girl=["Sita","Mita"];
const boy=["Ashish","Aakas","Aditya"];
const student=girl.concat(boy);
console.log(student);

//The concat() method can take any number of array arguments:

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

/*11.Array.prototype.splice()
 (i)Add and/or removes elemennts from an array

const months=["jan","march","april","june","july"];

 1.Add dec at the end of array?
 2.what is the return value of splice method?
 3.Update march to March(update)?
 4.Delete june from an array?*/

 const months=["jan","march","april","june","july"];

 //sol-1

 const newmonths1=months.splice(5,0,"dec");
 console.log(months);//o/p-["jan","march","april","june","july","dec"];
 const newmonths2=months.splice(4,0,"dec");
 console.log(months);//o/p-["jan","march","april","june","dec","july"];
 const newmonths3=months.splice(months.length,0,"dec");
 console.log(months);//o/p-["jan","march","april","june","july","dec"];

 //sol-2

 console.log(newmonths1);//o/p-it gives empty array because splice method store the element which is delete

 //sol-3

//  const indexOfmonth=months.indexOf("june");
//  if(indexOfMonth!=-1)
//  {
//      const updateMonth=months.splice(indexOfmonth,1,"March");
//      console.log(months);
//  }else
//  {
//     console.log('No such data found');
//  }

//-------------------------------Map(),Redeuce() and Filter() method --------------------------//

/*...........Array.prototype.map().................
(i)let newArray =arr.map(callback(currentValue[,index[,array]]){
//return element of new array containing , After executing some thing
}[,thisArg});*/

//it returns the new array without mutating the origina array

const array1=[1,4,9,16,25];

//num>9

let newArr1=array1.map((curElem,index,arr)=>{
    return curElem>9;
})

console.log(array1);
console.log(newArr1);

//....another way.....

let newArr2 =array1.map((curElm,index,arr)=>{
  return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
})

console.log(newArr2);

/* Q. (1)Find the square root of each element in an array?
   let arr=[25,36,49,64,81];

   Q.(2)Multiply each element by 2 and return only those elements which are greater than 10?

   let arr=[2,3,4,5,6,7]*/

//sol-1

let arr=[25,36,49,64,81];

let arrSqr=arr.map((curElem)=>{
    return Math.sqrt(curElem);
})
console.log(arrSqr);

//sol-2

let arr4=[2,3,4,5,6,7];

let arr5=arr4.map((curElem)=>{
    return curElem*2;
}).filter((curElem)=>{
    return curElem>10;
})

console.log(arr5);

/*...............Reduce Method.............

(i)flatten an array to convert the 3d or 2d array into a single dimensional array 
(ii)The reduce() method executes a reducer function (that you provide) on each element of the array , resulting in single output value.

1.Accumulator
2.current value
3.Current index
4.source Array...........*/

let arr6=[5,6,2];

let sum=arr6.reduce((accumulator,curElem,index,arr6)=>{
    return accumulator+=curElem;
})

console.log(sum);

//Ex-2

let arr7=[2,3,4,5,6,7];

let sum2=arr7.map((curElem)=>{
    return curElem*2;
}).filter((curElem)=>{
    return curElem>10;
}).reduce((accumulator,curElem,index,arr7)=>{
    return accumulator+=curElem;
})

console.log(sum2);










//......Searching and Filter in an Array........
//..........Array Subsection 2 Searching and Filter in Array.........

