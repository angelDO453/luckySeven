/*/////////////////////////////////////////////////////////////////
Name: Angel D. Ortiz
Date Created: 9/10/2018
Most recent revision: 9/14/2018
Description: luckSeven.js
*/////////////////////////////////////////////////////////////////

function playForm() { //Function designed to retrieve the user's starting bet
	var playersCash = 0;
	playersCash = document.forms["luckyGame"]["startingCash"].value;
	
	if( playersCash <= 0) {   	//This checks the starting cash and forces the function to end
		alert("The amount must be more than 0 dollars!");
		return false;
	}
	
	/* //This comment section is part of a code where the user is prompted to input the starting amount
	do{ //First ask and then check the betting amount
		playersCash = prompt("How much money do you want to bet? ");
			if(playersCash <= 0){
				alert("The amount must be more than 0 dollars!");
			}
	}while (playersCash <= 0);
		
	document.getElementById("startingCash").innerText = playersCash;*/
	
	startBet(playersCash); // Call this function to start play the game
	
	alert("Press play to try again. "); //User information about playing again
	return false;
	
	}
	
function startBet(cash){	//Had to use Number because the browser would treat variables as strings
	var rollsBroke = 0; var maxCash = Number(cash); var rollsMax = 0; var currentCash = Number(cash);
	
	while(currentCash > 0){	//looping the progam until the user reaches 0
		rollsBroke++;	//counts a roll before rolling
		if( rollDices() ){	//rollDices will return a false if it didnt result with a 7
			currentCash = currentCash + 4;
			
			if(currentCash > maxCash){
				maxCash = currentCash;	//check if the current amount is bigger then saved max amount
				rollsMax = rollsBroke;	//rolls till broke can be treated as a counter
			}
			
			
		}
		else{
			currentCash--;	//subtracts one dollar
		}
	}
	
	document.getElementById("startingBet").innerText = cash + ".00";
	document.getElementById("rollCountBroke").innerText = rollsBroke; //modify the table on the html page
	document.getElementById("highestBet").innerText = maxCash + ".00";
	document.getElementById("rollCountHigh").innerText = rollsMax;
	
	document.getElementById("results").style.display = "block";	//enables the table
}

function rollDices(){
	var youWon = (Math.floor(Math.random() * 6)) + 2 + (Math.floor(Math.random() * 6));	//and the two randoms  plus 2
	// with two dices you will never have a sum less than 2
	if(youWon === 7){
		return true;	//check to see if the player won the dice roll
	}
	else{ return false;}
}