/*..............Date and Time..................
(i)Javascript date objects represent a single moment in time in a platform independent format 
(ii)Date objects contain a number
(iii)That represent milliseconds since 1 january 1970 UTC.

There are 4 ways to Creating new Date objects 
 (a)new Date()
 (b)new Date(year, month, day, hours, minutes, seconds, milliseconds)
 (c)new Date(milliseconds)
 (d)new Date(date string)*/

 var currDate=new Date();

 console.log(new Date());
 console.log(new Date().toLocaleString());//but in java we use Localstring
 console.log(new Date().toString());

/*new Date(year, month, .......)
(i)7 numbers specify year , month ,day, hour,minute,second.and milisecond
(ii)NOTE:-Javascript counts months from 0 to 11
(iii)January is 0 and December is 11*/

var d=new Date(2023,8,27,33,30,0);
console.log(d.toLocaleString());

var d=new Date("October 13,2021 11:13:00");
console.log(d.toLocaleString());

//...............Dates Method................//

var currDate=new Date();

//how to get the individual date

console.log(currDate.toLocaleString());
console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getDate());
console.log(currDate.getDay());

//how to set individual date

console.log(currDate.setFullYear(2022, 10, 5));
console.log(currDate.setMonth(10));
console.log(currDate.setDate(5));
console.log(currDate.toLocaleString());


//..........Times Method..........

var curTime=new Date();

//how to get the indivisual time

console.log(curTime.getTime());
console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

//how to set the indivisual time

var curTime=new Date();

console.log(curTime.setTime());
console.log(curTime.setHours(5));
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds(5));

//..............Important method..............

var time=new Date().toLocaleTimeString(); //gives only current time
console.log(time);

var date=new Date().toLocaleDateString();//27-09-2023
console.log(date);

var date_time=new Date().toLocaleString();
console.log(date_time);