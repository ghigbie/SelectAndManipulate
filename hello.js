var tag = document.getElementById("highlight");
var tag2 = document.getElementsByClassName("bolded");
var tag3 = document.getElementsByTagName("li");
var tag4 = document.getElementsByTagName("h1")[0];

console.log(tag);
console.log(tag2);
console.log(tag3);
console.log(tag4);

var tag5 = document.querySelector("#highlight");
var tag6 = document.querySelector(".bolded");
var tag7 = document.querySelector("h1");

console.log(tag5);
console.log(tag6);
console.log(tag7);