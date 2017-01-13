var tag = document.getElementById("highlight");
var tag2 = document.getElementsByClassName("bolded");
var tag3 = document.getElementsByTagName("li");
var tag4 = document.getElementsByTagName("h1")[0];

console.log(tag);
console.log(tag2);
console.log(tag3);
console.log(tag4);

var tag5 = document.querySelector("#highlight"); //uses CSS selectors
var tag6 = document.querySelector(".bolded");
var tag7 = document.querySelector("h1");

console.log(tag5);
console.log(tag6);
console.log(tag7);

var tag8 = document.querySelectorAll(".bolded");

console.log(tag8);

var tag9 = document.querySelectorAll("h1");

console.log(tag9);

//four differnt ways to select the first <p> tag
 var method1 = document.querySelector("p");
 var method2 = document.getElementById("first");
 var method3 = document.querySelectorAll(".special");
 var method4 = document.querySelector("h1 p");
 var method5 = document.getElementsByTagName("p")[0];
 var method6 = document.querySelectorAll("p")[0];

 console.log("four differnt ways to select the first <p> tag");
 console.log(method1);
 console.log(method2);
 console.log(method3);
 console.log(method4);
 console.log(method5);
 console.log(method6);