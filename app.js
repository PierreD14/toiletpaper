var rollsSlider = document.getElementById("rolls");
var rollsOutput = document.getElementById("rollsValue");
rollsOutput.innerHTML = rollsSlider.value;

rollsSlider.oninput = function() {
	rollsOutput.innerHTML = this.value;
	calculateRolls();
}




var daysSlider = document.getElementById("days");
var daysOutput = document.getElementById("daysValue");
daysOutput.innerHTML = daysSlider.value;

daysSlider.oninput = function() {
	daysOutput.innerHTML = this.value;
	calculateRolls();	
}



var peopleSlider = document.getElementById("people");
var peopleOutput = document.getElementById("peopleValue");
peopleOutput.innerHTML = peopleSlider.value;

peopleSlider.oninput = function() {
	peopleOutput.innerHTML = this.value;
	calculateRolls();
}

var lifeSlider = document.getElementById("life");
var lifeOutput = document.getElementById("lifeValue");
lifeOutput.innerHTML = lifeSlider.value;

lifeSlider.oninput = function() {
	lifeOutput.innerHTML = this.value;
	calculateRolls();
}






function calculateRolls() {

	const nbrolls = rollsSlider.value;
	const nbdays = daysSlider.value;
	const nbpeople = peopleSlider.value;
	const timelife = lifeSlider.value;

	const paperDays = nbrolls * timelife; 
	const ratio = paperDays / nbdays / nbpeople * 100 ;

	const ratioDiv = document.getElementById('ratio');


	if (ratio>200){
		const emoji = ": this is the percentage of the quarantine that you will survive. 🤣 Wow! I accuse you of buing all the toilet paper from the store... ";
		ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;	

	}else if (ratio>100){
		const emoji = ": this is the percentage of the quarantine that you will survive. 😉 Nice, you will survive it!";
		ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;

	} else if (ratio == 100){
		const emoji = ": this is the percentage of the quarantine that you will survive. 😯 Really close! You will survive finishing your last roll in the last day! ";
		ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;

	} else if (ratio > 75){
		const emoji = ": this is the percentage of the quarantine that you will survive. 😐 Sad...You will not survive all your quarantine days, but it will be close.";
		ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;

	} else if (ratio > 30){
		const emoji = ": this is the percentage of the quarantine that you will survive. 😔 You will be in trouble from nearly half of the confinement, enjoy your last days!";
		ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;

	} else if (ratio > 0){
		const emoji = ": this is the percentage of the quarantine that you will survive. 💩 Were you sleeping when everybody else was rushing to Carrefour? Probably, and you will perish really soon!";
		ratioDiv.innerText = `${Math.round(ratio)}%  ${emoji}`;
	}
};
