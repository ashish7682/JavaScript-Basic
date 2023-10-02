/* Section 10👉 Document Object model in JavaScript 

 (1️) Window is the main container or we can say the  global Object and any operations related to entire 
 (2️) browser window can be a part of window object. 

 For ex 👉 the history or to find the url etc.

 1️⃣ whereas the DOM is the child of Window Object





   2️⃣(i) All the members like objects, methods or properties. 
     (ii) If they are the part of window object then we do not refer the window object.
    (iii) Since window is the global object so you do not have to write down window. 
     (iv) it will be figured out by the runtime.

     For example
   👉 window.screen or just screen is a small information object about physical screen dimensions.
   👉 window.location giving the current URL
   👉 window.document or just document is the main object of the potentially visible (or better yet: rendered)  document object model/DOM.
  

  2️⃣ Where in the DOM we need to refer the document, 
   (i) if we want to use the document object, methods or properties
   For example
   👉 document.getElementById()


  3️⃣ Window has methods, properties and object. 
    (i) ex setTimeout() or setInterval() are the methods where as Document is the object of the Window and 
    (ii) It also has a screen object with properties describing the physical display.


  (*) Now, I know you have a doubt like we have seen the methods and object of the global object that is window
  (**) But What about the properties of the Window Object 🤔

   so example of window object properties are
  (#) innerHeight,  innerWidth and there are many more 


 let's see some practical in DOM HTML file




 ************** DOM vs BOM *******************

 👉 The DOM is the Document Object Model, which deals with the document, the HTML elements themselves, 
     e.g. document and all traversal you would do in it, events, etc.

        For Ex: 👨‍🏫
        change the background color to red
        document.body.style.background = "red";


 👉 (*)The BOM is the Browser Object Model, which deals with browser components. 
    (**)aside from the document, like history, location, navigator and screen (as well as some others that vary by browser).
    (***)Or In simple meaning all the Window operations which comes under BOM are performed usign BOM 


 Let's see more practical on History object 

 Functions alert/confirm/prompt are also a part of BOM: 
 they are directly not related to the document, 
 but represent pure browser methods of communicating with the user.

 alert(location.href);  shows current URL
 if (confirm("Want to Visit ThapaTechnical?")) {
   location.href = "https:www.youtube.com/thapatechnical";  redirect the browser to another URL
 }





 Section 3️⃣: Navigate through the DOM 

 1: document.documentElement
    returns the Element that is the root element of the document. 
 2: document.head
 3: document.body
 4: document.body.childNodes (include tab,enter and whiteSpace)
   list of the direct children only 
 5: document.children (without text nodes, only regular Elements)
 6: document.childNodes.length

 👉 Practice Time 

 Q.How to check whether an element has child nodes or not?

 Ans:-we will use hasChildNodes()

 👉 Practice Time 
 How to find the child in DOM tree 
 firstChild vs firstElementChild
 lastChild vs lastElementChild 
 const data = document.body.firstElementChild;
 undefined
 data
 data.firstElementChild
 data.firstElementChild.firstElementChild
 data.firstElementChild.firstElementChild.style.color = "red"
 vs 
 document.querySelector(".child-two").style.color = "yellow";

 👉 How to find the Parent Nodes 
 document.body.parentNode
 document.body.parentElement

 👉 How to find or access the siblings
 document.body.nextSibling
 document.body.nextElementSibling
 document.body.previousSibling
 document.body.previousElementSibling.........*/

