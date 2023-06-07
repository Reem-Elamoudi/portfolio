
//list header
let menu = document.querySelector(".menu");
let closeI = document.querySelector(".close");
let ul = document.querySelector("header .continer .list ul");
const liA = document.querySelectorAll("header .continer .list ul li a");
const body = document.body

menu.onclick = openList;
closeI.onclick = closeList;
liA.forEach(link => {
	link.onclick = closeList;
})

function openList(){
	menu.style.display = "none";
	closeI.style.display = "block";

	ul.classList.add("open")
	body.style.cssText = "height: 100vh; overflow: hidden;"
}

function closeList(){
	closeI.style.display = "none";
	menu.style.display = "block";

	ul.classList.remove("open")
	body.style.cssText = "height: auto; overflow: auto;"
}


//landing animation 
//line in header link
const li = document.querySelectorAll("header .continer .list ul li")

function liLine(section){
	li.forEach( l => {
		l.classList.remove("active")
	})
	li.forEach( l => {
		li[section].classList.add("active")
	})
}


window.onload = () => {
	setTimeout(()=> {
		let sidel = document.querySelector(".loading .cont .side.l");
		let sider = document.querySelector(".loading .cont .side.r");
		let textCont = document.querySelector(".loading .cont");

		sidel.style.left = "-100vw"
		sider.style.right = "-100vw"
		textCont.style.opacity = "0"
	}, 2000) 

	setTimeout(()=> {
		liLine(0);
		const landingItems = document.querySelectorAll("#landing .continer *:not(#landing .continer .content a)");
		const landingA = document.querySelector("#landing .continer .content a");

		landingItems.forEach((item, index) => {
			setTimeout(() => {
				item.style.cssText = "top: 0; opacity: 1;";
				landingA.style.opacity = "1";
			}, index * 100);
		});
		setTimeout(() => {
			landingA.style.opacity = "1";
		}, landingItems.length * 100);
	}, 2000) 
};


//scroll animation
window.onscroll = () => {
	const cards = document.querySelectorAll("#project .continer .cards .card .img");
	const spanProject = document.querySelectorAll("#project .continer .cards .card span");
	const projectP = document.querySelector("#project .continer p:not(#sectionTitle)");
	const work = document.querySelector("#project .continer");

	//project animation
  const topW = work.getBoundingClientRect().top;
	const vh = window.innerHeight;


  if (topW > vh) {
		liLine(0);
	}

  if (topW <= vh) {
		liLine(1);
		projectP.style.cssText = "top: 0; opacity: 1;"; 

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.cssText = "width: 100%; opacity: 1;";
      }, index * 200);
    });
		spanProject.forEach((span, index) => {
      setTimeout(() => {
        span.style.cssText = "top: 0; opacity: 1;";
      }, index * 100);
    });
  }


	//about animation
	const p = document.querySelectorAll("#about *:not(#sectionTitle):not(.img)");
	const img = document.querySelector("#about .img");
	const about = document.querySelector("#about .continer");

	const topA = about.getBoundingClientRect().top;

		if (topA <= vh) {
			liLine(2);

			p.forEach((p, index) => {
			setTimeout(() => {
				p.style.cssText = "top: 0; opacity: 1;";
				img.style.cssText = "max-width: 395px; opacity: 1;";
			}, index * 50);
		});
	}


	//contact animation
	const contactItems = document.querySelectorAll("#contact *:not(#sectionTitle)");
	const contact = document.querySelector("#contact .continer");

	const topC = contact.getBoundingClientRect().top;

		if (topC <= vh) {
			liLine(3);

			contactItems.forEach((item, index) => {
				setTimeout(() => {
					item.style.cssText = "top: 0; opacity: 1;";
				}, index * 50);
			});
	}


};






// send email from form
function sendEmail(){
  let nameE = document.querySelector('#name');
  const email = document.querySelector('#email');
  const ms = document.querySelector('#ms');
  const valid = document.querySelectorAll('.valid-ms');

  Email.send({
    SecureToken : "905f8ba7-e52a-48da-9499-ace37e39e7ed",
    To : 'rela69318am@gmail.com',
    From : 'rela69318am@gmail.com',
    Subject : "email from site:",
    Body : `
      NAME: ${nameE.value}<br>
      EMAIL: ${email.value}<br>
      MESSAGE: ${ms.value}
    `
  }).then(
    message => alert("message sent successfully")
  );
}

// Add event listener for Enter key press
document.querySelectorAll("input").forEach(input => {
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendEmail();
      reset();
      e.preventDefault();
    }
  });
});



//mouse move
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();



