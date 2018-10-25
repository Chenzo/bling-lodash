/* global $ */
import './modules/bling.js';


console.log("One JS loaded and Run");

var myThing = $("#box")[0];
console.log(myThing);


myThing.classList.add("red-font");
myThing.on("click", function() {
	alert("hahaha");
});

console.log(myThing.classList);


var test = $(".js-tester p")[0];
console.log(test);




var allDivs = $(".box-style");

allDivs.forEach(function(element) {
	console.log(element);
	element.style.margin = "40px";
});