function team1Touchdown() { //adds 6 to team1 current score, increments team2 touchdown count by 1
	let TDlbl = document.getElementById('team1TouchdownLbl');
	var current_count = TDlbl.innerText;
	var current_count_int = parseInt(current_count, 10) + 1;
	document.getElementById("team1TouchdownLbl").innerHTML = current_count_int.toString();

	let ScoreLbl = document.getElementById('team1CurrentScore');
	var current_score = ScoreLbl.innerText;
	var current_score_int = parseInt(current_score, 10) + 6;
	document.getElementById("team1CurrentScore").innerHTML = current_score_int.toString();
}

function team2Touchdown() { //adds 6 to team2 current score, increments team2 touchdown count by 1
	let TDlbl = document.getElementById('team2TouchdownLbl');
	var current_count = TDlbl.innerText;
	var current_count_int = parseInt(current_count, 10) + 1;
	document.getElementById("team2TouchdownLbl").innerHTML = current_count_int.toString();

	let ScoreLbl = document.getElementById('team2CurrentScore');
	var current_score = ScoreLbl.innerText;
	var current_score_int = parseInt(current_score, 10) + 6;
	document.getElementById("team2CurrentScore").innerHTML = current_score_int.toString();
}

function team1ExtraPoint() { //adds 1 point to team1 current score
	let ScoreLbl = document.getElementById('team1CurrentScore');
	var current_score = ScoreLbl.innerText;
	var current_score_int = parseInt(current_score, 10) + 1;
	document.getElementById("team1CurrentScore").innerHTML = current_score_int.toString();
}

function team2ExtraPoint() { //adds 1 point to team 2 current score
	let ScoreLbl = document.getElementById('team2CurrentScore');
	var current_score = ScoreLbl.innerText;
	var current_score_int = parseInt(current_score, 10) + 1;
	document.getElementById("team2CurrentScore").innerHTML = current_score_int.toString();
}

function team1Conversion() { //adds 2 points to team1 current score
	let ScoreLbl = document.getElementById('team1CurrentScore');
	var current_score = ScoreLbl.innerText;
	var current_score_int = parseInt(current_score, 10) + 2;
	document.getElementById("team1CurrentScore").innerHTML = current_score_int.toString();
}

function team2Conversion() { //adds 2 points to team2 current score
	let ScoreLbl = document.getElementById('team2CurrentScore');
	var current_score = ScoreLbl.innerText;
	var current_score_int = parseInt(current_score, 10) + 2;
	document.getElementById("team2CurrentScore").innerHTML = current_score_int.toString();
}

function team1FieldGoal() { //adds 3 to team1 current score, increments team 2 field goal count by 1
	let FGlbl = document.getElementById('team1FieldGoalLbl');
	var current_count = FGlbl.innerText;
	var current_count_int = parseInt(current_count, 10) + 1;
	document.getElementById("team1FieldGoalLbl").innerHTML = current_count_int.toString();

	let ScoreLbl = document.getElementById('team1CurrentScore');
	var current_score = ScoreLbl.innerText;
	var current_score_int = parseInt(current_score, 10) + 3;
	document.getElementById("team1CurrentScore").innerHTML = current_score_int.toString();
}

function team2FieldGoal() { //adds 3 to team2 current score, increments team 2 field goal count by 1
	let FGlbl = document.getElementById('team2FieldGoalLbl');
	var current_count = FGlbl.innerText;
	var current_count_int = parseInt(current_count, 10) + 1;
	document.getElementById("team2FieldGoalLbl").innerHTML = current_count_int.toString();

	let ScoreLbl = document.getElementById('team2CurrentScore');
	var current_score = ScoreLbl.innerText;
	var current_score_int = parseInt(current_score, 10) + 3;
	document.getElementById("team2CurrentScore").innerHTML = current_score_int.toString();
}

function team1FirstDown() { //increments team 1 first down count by 1
	let FDlbl = document.getElementById('team1FirstDownLbl');
	var current_count = FDlbl.innerText;
	var current_count_int = parseInt(current_count, 10) + 1;
	document.getElementById("team1FirstDownLbl").innerHTML = current_count_int.toString();
}

function team2FirstDown() { //increments team 2 first down count by 1
	let FDlbl = document.getElementById('team2FirstDownLbl');
	var current_count = FDlbl.innerText;
	var current_count_int = parseInt(current_count, 10) + 1;
	document.getElementById("team2FirstDownLbl").innerHTML = current_count_int.toString();
}

