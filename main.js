
//list header
let menu = document.querySelector(".menu");
let closeI = document.querySelector(".close");
let ul = document.querySelector("header .continer .list ul");

menu.onclick = openList;
closeI.onclick = closeList;

function openList(){
	menu.style.display = "none";
	closeI.style.display = "block";

	ul.classList.add("open")
}

function closeList(){
	closeI.style.display = "none";
	menu.style.display = "block";

	ul.classList.remove("open")
}