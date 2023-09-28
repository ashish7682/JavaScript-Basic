// JavaScript strings are for storing and manipulating text.//

let  myName="Ashish Kumar";
let myChannelName="Ashish Kumar";

let ytName=new String("Technical Guru");

console.log(myName);
console.log(ytName);


//..........String length.............//

let name2="Ashish kumar";
console.log(name2.length);

//..........Escape Character...........//

// let anySentence="we are the so called "viking" from th north"; This sentence provide syntax error

let anySentence1="we are the so called \"viking\" from th north";
console.log(anySentence1);

let anySentence2='we are the so called \"viking\" from th north';
console.log(anySentence2);

let anySentence3="we are the so called \'viking\' from th north";
console.log(anySentence3);

/*...............Finding string in a string.....................
  (i)The index of method returns the index of (the position of) the first occurance of a specidied text in a string*/

  const myBioData="I am Thapa Technical";
  console.log(myBioData.indexOf("thapa"));//it return -1 as it is not present in the string
  console.log(myBioData.indexOf("Thapa"));//o/p-9

  console.log(myBioData.lastIndexOf("T",6));//o/p-5

  //..............Slice Method()...........//
//  (i) slice extract a extract a part of string and returns extracted part in a new String

var str="Apple, Banana, kiwi";
let res=str.slice(0,4);

console.log(res);//o/p-Appl

let res1=str.slice(7,-2);
console.log(res1);//o/p-Banana,ki

let res2=str.slice(7);
console.log(res2);//Banana, kiwi

/*............substring method()...............

 (i)substring is similar to slice but the different is that substring cannot accept negative index where as slice accept negative index
(ii)if we introduce negative index then it start counting from o to first index.*/

var str="Apple, Banana, kiwi";
let res3=str.substring(0,4);

console.log(res3)//o/p-Appl


let res4=str.substring(7,-2);

console.log(res4);

/*..................substr method().................

(i) substr() is similar to slice() method
(ii)But the difference is that the second parameter specifies the length of the extracted part*/

var str="Apple, Banana, kiwi";
let res5=str.substr(0,4);

console.log(res5);//o/p-Appl

let res6=str.substr(-4);

console.log(res6);//o/p-kiwi

/*.................replace method().................

(i)String.prototype.replace(searchFor,replaceWith)
(ii)The replace method  replaces a specified value with another value in a string
(iii)The replace method does not change the string it is called on . It returns a new String
(iv)By default() the replace method replaces only the first match
(v)By default() the replace method is case sensitive */

var str="I am ashish kumar sahoo ashish";
var replaceStr=str.replace("ashish","Ashish");
console.log(replaceStr);

/*....................Extracting String Characters................

(i)There are 3 methods for extracting string character
   (a)charAt(position)
   (b)charCodeAt(position)
   (c)Property access[ ]*/

  var str="Hello World";

  console.log(str.charAt(0));//o/p-H

  var str="HELLO WORLD";

  console.log(str.charCodeAt(0));//charCodeAt() method returns gives unicode of the character

//Q.Return the Unicode of the last character in a string

var str="Hello World";
let lastChar=str.length-1;
console.log(str.charCodeAt(lastChar));

//...................Property Access................
//ECMAScript 5 (2009) allows property access [ ] on strings

var str="HELLO JAVASCRIPT";
console.log(str[1]);//o/p-E

//...........Other Method..................

let MyName="Ashish sahoo";

console.log(MyName.toUpperCase());
console.log(MyName.toLowerCase());

//..........concat() method............

let fName="Ashish";
let lName="Sahoo";

console.log(fName + lName);//AshishSahoo
console.log(`${fName} ${lName}`);//Ashish Sahoo
console.log(fName.concat(lName));//AshishSahoo
console.log(fName.concat(" ",lName));//Ashish Sahoo
