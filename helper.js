var h1 document.querySelector("h1");

hi.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;


setInterval(function(){
	if(isBlue){
		body.style.background = "white";
	}
	else{
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;

}, 1000)