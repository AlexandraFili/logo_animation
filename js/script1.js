//storing the element with id of "hello" in a variable
var heading = document.getElementById("hello");

//printing the variable(element) to the console
console.log(heading);

//changing the header content
heading.innerHTML = "<i>Hello!</i>";

//using textContent will only add in text and won't interpret HTML code
//heading.textContent = "<i>Hello!</i>";

//changing header font colour, font size and background colour
heading.style.color='purple';
heading .style.fontSize='30pt';
heading.style.backgroundColor='white';

//getting all paragraph elements [returns an array] and setting the first paragraph text
document.getElementsByTagName("p")[0].textContent="Wooo!";

//getting all paragraph elements(return an array ) and storing them in a variable
var paraBG = document.getElementsByTagName("p");

 //paraBG[0].innerHTML ="Wooo! Wooo!";
 paraBG[0].textContent = "Moo! Woo@";
 paraBG[0].style.backgroundColor="yellow";	
paraBG[1].style.backgroundColor="red";

//Loopimg through the elements in the array and storing them in a variable.
for(var i=0; i< paraBG.length; i++) {
	
paraBG[i].style.backgroundColor="white";	
paraBG[i].style.color="red";
paraBG[i].style.fontSize='16pt';
paraBG[i].style.fontFamily = 'monospace';	
}


//functin to change the background which is called in the onclick attribute of the button
function changeBg() {
	
	document.body.style.backgroundColor='lightgrey';
	
}
//function to change background of the body when someone clicks on second paragraph
paraBG[1].onclick=function(){
		document.body.style.backgroundColor="lightblue";
};


//event listener method
heading.addEventListener("click", changeBg);

//random colour function
function randomColor(){
	var r =Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}
//on mouse out of image, change container colour
 document.getElementById("blossoms").onmouseout=function(){ 
 document.getElementById("container").style.backgroundColor=randomColor();
};
//onClick, swap the image (and it's alt text)
    document.getElementById("blossoms").onclick = function(){
	document.getElementById("blossoms").src ="../images/bamboo_sml.jpg";
	document.getElementById("blossoms").alt="Picture of some bamboo";
	
	
	
}