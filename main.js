
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


//landing animation 
const landingItems = document.querySelectorAll("#landing .continer *:not(#landing .continer .content a)");
const landingA = document.querySelector("#landing .continer .content a")

landingItems.forEach((item, index) => {
	setTimeout(() => {
		item.style.cssText = "top: 0; opacity: 1;";
		landingA.style.opacity = "1"
	}, index * 100);
});
setTimeout(() => {
	landingA.style.opacity = "1"
}, index * 100);




//scroll animation
window.onscroll = () => {
const cards = document.querySelectorAll("#project .continer .cards .card .img");
const spanProject = document.querySelectorAll("#project .continer .cards .card span");
const projectP = document.querySelector("#project .continer p:not(#sectionTitle)");
const work = document.querySelector("#project .continer");

	//project animation
  const topW = work.getBoundingClientRect().top;
	const vh = window.innerHeight;


  if (topW <= vh) {

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
		contactItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.cssText = "top: 0; opacity: 1;";
      }, index * 50);
    });
}


};






// send email from form

function sendEmail(){
	const name = document.querySelector('#name');
	const email = document.querySelector('#email');
	const ms = document.querySelector('#ms');
	const valid = document.querySelectorAll('.valid-ms');

[name, email, ms].forEach(input => {
	input.addEventListener('keypress', function(e) {
		if (e.key === 'Enter') {
			sendEmail();
			reset();
			e.preventDefault();
		}
	});
})

Email.send({
	SecureToken : "905f8ba7-e52a-48da-9499-ace37e39e7ed",
	To : 'rela69318am@gmail.com',
	From : 'rela69318am@gmail.com',
	Subject : "email from site:",
	Body : `
	NANE: ${name.value}<br>
	EMAIL: ${email.value}<br>
	MASSAGE: ${ms.value}
	`
	}).then(
	message => alert("message sent successfully")
	);

}