var startingRandomNumber = Math.floor((Math.random()*101) + 19);
var wins = 0;
var losses = 0;
var crystalOneValue = Math.floor((Math.random()*12) + 1);
var crystalTwoValue = Math.floor((Math.random()*12) + 1);
var crystalThreeValue = Math.floor((Math.random()*12) + 1);
var crystalFourValue = Math.floor((Math.random()*12) + 1);
var scoreAddition;
var finalScore;

var reset = function(){
	startingRandomNumber = Math.floor((Math.random()*101) + 19);
	crystalOneValue = Math.floor((Math.random()*12) + 1);
	crystalTwoValue = Math.floor((Math.random()*12) + 1);
	crystalThreeValue = Math.floor((Math.random()*12) + 1);
	crystalFourValue = Math.floor((Math.random()*12) + 1);
	finalScore =0;
	scoreAddition = 0;
};

var gameResultCheck = function(){
	if(finalScore ===startingRandomNumber){
		wins ++;
		$('.gameStatus').text("You Won");
		$('#winsCounter').text(wins);
		reset ();
	}

	else if (finalScore > startingRandomNumber){
		losses++;
		$('.gameStatus').text("You Lost");
		$('#lossCounter').text(losses);
		reset();

	}

	else {
		$('.gameStatus').text("In Progress");

	}
};


// funtions to give values to the crystals and score Addition
$(document).ready(function(){
	reset();
	$('#randomScoreToMatch').text(startingRandomNumber);

	//functions for crystal 1 buttons
	$('#crystal1').click(function(){
		$('.crystalValue').text(crystalOneValue);
		finalScore = finalScore + crystalOneValue;
		$('.FinalRunningScore').text(finalScore);
		gameResultCheck();
		$('#randomScoreToMatch').text(startingRandomNumber);

	})

	//functions for crystal 2 buttons
	$('#crystal2').click(function(){
		$('.crystalValue').text(crystalTwoValue);		
		finalScore = finalScore + crystalTwoValue;
		$('.FinalRunningScore').text(finalScore);		
		gameResultCheck();
		$('#randomScoreToMatch').text(startingRandomNumber);

	})

	//functions for crystal 3 buttons
	$('#crystal3').click(function(){
		$('.crystalValue').text(crystalThreeValue);		
		finalScore = finalScore + crystalThreeValue;
		$('.FinalRunningScore').text(finalScore);
		gameResultCheck();
		$('#randomScoreToMatch').text(startingRandomNumber);
	
	})

	//functions for crystal 4 buttons
	$('#crystal4').click(function(){
		$('.crystalValue').text(crystalFourValue);
		finalScore = finalScore + crystalFourValue;
		$('.FinalRunningScore').text(finalScore);
		gameResultCheck();
		$('#randomScoreToMatch').text(startingRandomNumber);
	
	})
});