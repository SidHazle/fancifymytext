function helloWorld(){
	alert("Hello, world!");
}

function getBig(){
	helloWorld();
	var input = document.getElementById("intext");
	input.style.fontSize = "24pt";
}

function getBold(){
	helloWorld();
	var input = document.getElementById("intext");
	input.style.frontWeight="bold";
	input.style.textDecoration="underline";
	input.style.color="blue";
}

function getBoring(){
	var input = document.getElementById("intext");
	input.style.fontSize="initial";
	input.style.textDecoration="none";
	input.style.fontWeight="normal";
	input.style.color="black";
}

function getMood(){
	var moo = '-Moo';
	var input = document.getElementById("intext");
	input.style.textTransform="uppercase";
	input.value = input.value.split('.').join('') + moo;
}