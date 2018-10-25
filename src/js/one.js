
import './modules/bling.js';


console.log("One JS loaded and Run");

console.log($);

var container = document.querySelector("#box");
console.log(container);


var boxContainer = $("#box")[0];
console.log(boxContainer);



boxContainer.classList.add("red-font");
boxContainer.on("click", function() {
	console.log("boop");
});


var getMe = $(".js-getme")[0];
console.log(getMe);

getMe.style.height = '200px';
getMe.style.width = '200px';
getMe.style.border = '2px solid black'; 



var allDivs = $(".box-style");

allDivs.forEach(function(element) {
	console.log(element);
	element.style.margin = "40px";
});


