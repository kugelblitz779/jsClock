const secondHand = document.querySelector('.secHand');
const minuteHand = document.querySelector('.minHand');
const hHand = document.querySelector('.hourHand');
function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();

	const secDegree = ((seconds/60) * 360) + 90;
	secondHand.style.transform = `rotate(${secDegree}deg)`;

	const minutes = now.getMinutes();

	const minDegree = ((minutes/60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minDegree}deg)`;


	const hourDegree = ((minutes/12) * 360) + 90;
	hHand.style.transform = `rotate(${hourDegree})`;

	console.log(secDegree);
	


}


setInterval(setDate, 1000);