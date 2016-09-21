// LOGIC WRITTEN BY: SHAWN PARKES
var simonGame = {};
simonGame.simonBoard = ["red", "blue", "green", "yellow"];
simonGame.finished = true;
simonGame.points = -1;
simonGame.round = [];
simonGame.combinations;
simonGame.remainingButtons = ["cyan", "grey", "brown", "orange", "purple"];

/*
	Used when a new game is started to set the board, points, and combinations
*/
simonGame.initialize = function()
{
	this.simonBoard = ["red", "blue", "green", "yellow"];
	this.remainingButtons = ["cyan", "grey", "brown", "orange", "purple"];
	this.points = 0;
	this.combinations = 1;
	this.finished = false;
	this.setRound();
}

/*
	Used to move the game onto the next round. Points will be increased as well as the possible combinations if it is below ten
	Will call setRound to create the next round's sequence
*/
simonGame.incrementRound = function()
{
	this.points++;
	if(this.combinations < 10)
	{
		this.combinations++;
	}
	this.setRound();
}

/*
	Sets up the sequence for the round based on how many points the user already has
*/
simonGame.setRound = function()
{
	if(this.finished){return;}
	
	if(points == 9)
	{
		for(var x = 1; x <= 5; x++)
		{
			this.addButton();
		}
	}
	for(var x = 0; x < this.combinations; x++)
	{
		this.round[x] = this.simonBoard[Math.floor((Math.random() * (this.simonBoard.length)))];
	}
}

/*
	Adds another button to the Game Board
*/
simonGame.addButton = function()
{
	if(this.finished){return;}
	this.simonBoard.push(this.remainingButtons.shift);
}

/*
	returns the number of points to player has earned so far
*/
simonGame.getPoints = function()
{
	return points;
}

/*
	returns the remaining sequence for the round
*/
simonGame.getSequence = function()
{
	return round;
}

/*
	input - an string that represents what button was pressed
	Checks to make sure the user clicked the correct button
*/
simonGame.check = function(userin)
{
	if(this.finished){return;}
	if(userin == this.round.shift())
	{
		if(this.round.length == 0)
		{
			this.incrementRound();
		}
		return true;
	}
	else
	{
		this.gameOver();
		return false;
	}
}

/*
	The game is over.  Finished is set as true
*/
simonGame.gameOver()
{
	this.finished = true;
}
//END OF LOGIC