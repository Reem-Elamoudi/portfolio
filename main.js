
//list animation
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector(".menu .icon");
const lineOne = document.querySelector(".menu .icon .one");
const lineTwo = document.querySelector(".menu .icon .two");
const listBackground = document.querySelector(".list .listBackground");
const list = document.querySelector(".list .ul");
const ul = document.querySelector(".list .ul ul");
const btHead = document.querySelector(".list .ul .btHead");
const a = document.querySelectorAll(".list .ul ul a");
const user = document.querySelector("header .continer .user");
let headerLine = document.querySelector("header .continer > .line");


let openItems = [lineOne, lineTwo, listBackground, list, ul, user, headerLine]
let open;

a.forEach(e => e.onclick = closeList)

function openList(){
	console.log("open")
	open = true;

	openItems.forEach(e => e.classList.add("open"))
  a.forEach(e => e.classList.add("open"))
	document.body.classList.add("unscroll")

}


function closeList(){
	console.log("closed")
	open = false;

	openItems.forEach(e => e.classList.remove("open"))
  a.forEach(e => e.classList.remove("open"))
	document.body.classList.remove("unscroll")

}

function checkLListStatus(){
	return  open==true ? closeList() : openList()
}

menu.addEventListener("click", checkLListStatus)


//bt contact page animation
const bt = document.querySelectorAll(".bt");


bt.forEach(btn => {
	btn.onmouseover = () => {
		btn.lastElementChild.style.cssText = "animation: mouseover .5s forwards;"
	}
	btn.onmouseout = () => {
		btn.lastElementChild.style.cssText = "animation: mouseout .5s forwards;"
	}
	btn.onclick = () => {
		closeList()
		document.body.classList.add("unscroll")
		document.querySelector(".contact").classList.add("open")
	}
});

document.querySelector(".contact i").onclick = () => {
	document.body.classList.remove("unscroll")
	document.querySelector(".contact").classList.remove("open")
}


//scoll animation
let landing = document.querySelector("#landing");
let arrow = document.querySelector("#toTop");
let nameUSer = document.querySelector("header .continer .user h2 a")
let svg = document.querySelector("#toTop svg :first-child");

window.onscroll = scrollDown


function scrollDown(){
	// arrow up
	window.scrollY >= 550 ? arrow.style.bottom = "40px" : arrow.style.bottom = "-60px";

	//landing page opacity
	landingOpacity();

	//body background color
	changeBackgroundColor([249, 248, 244], [13, 30, 33])

	//change color item to #fff
	if(window.scrollY >= 600 && window.scrollY <= 4509) {
		a.forEach(a => a.style.color = "var(--ff)");
		btHead.style.cssText = "color: var(--ff); border-color: rgba(255, 255, 255, .2);";
		lineOne.style.backgroundColor = "var(--ff)";
		lineTwo.style.backgroundColor = "var(--ff)";
		headerLine.style.cssText = "background-color: rgba(255, 255, 255, .2);";
		menu.style.color = "var(--ff)";
		nameUSer.style.color = "var(--ff)";
		svg.setAttribute("fill", "#fff");
		arrow.style.borderColor = "var(--ff)";


	}else{
		a.forEach(a => a.style.color = "var(--header-color)");
		btHead.style.cssText = "color: var(--header-color); border-color: var(--border-color);";
		lineOne.style.backgroundColor = "var(--header-color)";
		lineTwo.style.backgroundColor = "var(--header-color)";
		headerLine.style.cssText = "background-color: var(--border-color);";
		menu.style.color = "var(--header-color)";
		nameUSer.style.color = "var(--header-color)";
		svg.setAttribute("fill", "rgb(10, 42, 48)");
		arrow.style.borderColor = "var(--header-color)";
	}


  //last page opacity
	const top = document.querySelector("#process").getBoundingClientRect().top;
  const vh = window.innerHeight;
	let pro = document.querySelector("#about2")
	if(top <= vh){
		pro.style.opacity = "0"
	}else{
		pro.style.opacity = "1"
	}


	//change background
	resetColors();
}


function changeBackgroundColor(start, end){
	//calcoulate progress
	const currentScroll = window.pageYOffset;
	const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
	const progress = Math.min(currentScroll / maxScroll, 1);

	//get color var
	const [startR, startG, startB] = start;
	const [endR, endG, endB] = end;

	r = Math.round(startR + (endR - startR) * progress *9.45);
	g = Math.round(startG + (endG - startG) * progress * 9.45);
	b = Math.round(startB + (endB - startB) * progress * 9.45);


	// creat rgba color code
	let newColor;
	if(window.scrollY >= 576){
		newColor = `rgba(13, 30, 33, 1)`
	}else{
		newColor = `rgba(${r}, ${g}, ${b}, 1)`;
	}

	//change background
	document.body.style.cssText = `background-color: ${newColor};`
	document.querySelector(".sectionBc").style.cssText = `background-image: linear-gradient(to bottom, ${newColor} 40%, transparent);`

}
changeBackgroundColor([249, 248, 244], [13, 30, 33])



function landingOpacity(){
	let opacity = 1;
	let previousScrollY = window.scrollY;

	opacity = 1 - (window.scrollY / window.innerHeight);
	if (previousScrollY < window.scrollY && opacity < 0) {
		opacity = 0;
	}

	landing.style.opacity = opacity;
	previousScrollY = window.scrollY;
}

//reset colors
function resetColors(){
	const top = document.querySelector("#process").getBoundingClientRect().top;
  const vh = window.innerHeight;
	if(top <= vh){
		document.body.style.backgroundColor = "rgb(249, 248, 244)"
		document.querySelector(".sectionBc").style.cssText = `background-image: linear-gradient(to bottom, rgb(249, 248, 244) 40%, transparent);`
	}
}




//whatIdo section animation
const titleCont = document.querySelector("#whatIdo .continer .contTitle .title .cont");
let Top = 0;

setInterval(() => {
  let step = 102;
	if (window.innerWidth <= 992) step = 65;
  if (window.innerWidth <= 767) step = 65;
  if (window.innerWidth <= 479) step = 129

  Top += -step;

  if (Top <= -step * 8) {
    Top = 0;
    titleCont.style.transition = "0s";
    titleCont.style.transform = "translateY(0)";
		titleCont.style.paddingTop = "0px"
  } else {
    titleCont.style.transition = ".5s";
    titleCont.style.transform = `translateY(${Top}px)`;
		titleCont.style.paddingTop = "9px"
  }
}, 1000);


//open card

let cards = document.querySelectorAll("#whatIdo .continer .cards .card");
openCard(cards, 90);

function openCard(cards, maxHeight){
	cards.forEach(card => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("open")) {
        cards.forEach(c => {
          if (c !== card && c.classList.contains("open")) {
            c.style.maxHeight = `${maxHeight}px`;
            c.classList.remove("open");
          }
        });
        setTimeout((e) => {
          card.style.maxHeight = `${card.scrollHeight}px`;
          card.classList.add("open");
        }, 10); // Adjust the delay here if needed
      } else {
        card.style.maxHeight = `${maxHeight}px`;
        card.classList.remove("open");
      }
    });
  });
}


//works slide animation

const cover = document.querySelector("#works .cover");
const sides = document.querySelector("#works .cover .sides");
const leftSide = document.querySelector("#works .cover .side.left");
const leftSpan = document.querySelector("#works .cover .side.left span");
const rightSide = document.querySelector("#works .cover .side.right");
const rightSpan = document.querySelector("#works .cover .side.right span");

resetSpan();
cover.addEventListener("mousemove", mouseMove);
cover.addEventListener("mouseleave", resetSpan);


function mouseMove(e) {
const x = e.clientX - cover.getBoundingClientRect().left;
const y = e.clientY - cover.getBoundingClientRect().top;

const sideWidth = sides.offsetWidth / 2;
const spanWidth = leftSpan.offsetWidth / 2;

if (x <= sideWidth) {
		leftSpan.style.opacity = 1;
		rightSpan.style.opacity = 0;
		leftSpan.style.transform = `translate(${x - spanWidth}px, ${y - spanWidth}px) scale(1)`;
		rightSpan.style.transform = `translate(${x - sideWidth - spanWidth}px, ${y - spanWidth}px) scale(0)`;
} else {
		leftSpan.style.opacity = 0;
		rightSpan.style.opacity = 1;
		leftSpan.style.transform = `translate(${x - spanWidth}px, ${y - spanWidth}px) scale(0)`;
		rightSpan.style.transform = `translate(${x - sideWidth - spanWidth}px, ${y - spanWidth}px) scale(1)`;
}
}

function resetSpan() {
	leftSpan.style.opacity = 0;
	rightSpan.style.opacity = 0;
	leftSpan.style.transform = `translate(0, 0) scale(0)`;
	rightSpan.style.transform = `translate(0, 0) scale(0)`;
}


const images = document.querySelectorAll('.img');
const loade = document.querySelectorAll('#works .continer .loade .line span');
let currentIndex = 0;
loade[currentIndex].classList.add('active');

let changeImg = setInterval(changeImages, 3000);

function changeImages() {
currentIndex++;

if (currentIndex >= images.length) {
	currentIndex = 0;
	loade.forEach(i => i.classList.remove('active'));
} else if (currentIndex < 0) {
	currentIndex = images.length - 1;
} 

setTimeout(()=>{
	loade[currentIndex].classList.add('active');
}, 20)

images.forEach(i => i.classList.remove('active'));
images[currentIndex].classList.add('active');
}


leftSide.onclick = (e) => {
clearInterval(changeImg);

currentIndex--;
console.log(currentIndex);

if (currentIndex <= 0) {
	currentIndex = 0;
}

updateLoade(currentIndex);

images.forEach(i => i.classList.remove('active'));
images[currentIndex].classList.add('active');

};

rightSide.onclick = (e) => {
clearInterval(changeImg);

currentIndex++;
console.log(currentIndex);

if (currentIndex >= images.length) {
	currentIndex = images.length-1;
}

updateLoade(currentIndex);

images.forEach(i => i.classList.remove('active'));
images[currentIndex].classList.add('active');
};

function updateLoade(currentIndex){


const currentLoade = loade[currentIndex];
const previousIndex = currentIndex - 1;

currentLoade.classList.add('active');

loade.forEach((l, index) => {
	if(index > currentIndex) l.classList.remove('active');
	if(index < currentIndex){
		l.style.animationDuration = "0s"
	}else{
		l.style.animationDuration = "3s"
	}
})

}



//process animation
let cardsP = document.querySelectorAll("#process .continer .rowTwo .cont .card");

cardsP.forEach(card => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("open")) {
      cardsP.forEach(c => {
				c.classList.remove("open");
      });
      card.classList.add("open");
    } else {
      card.classList.remove("open");
    }
  });
});