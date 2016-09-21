// LOGIC WRITTEN BY: SHAWN PARKES


var simonGame = {};
simonGame.simonBoard = ["red", "blue", "green", "yellow"];
simonGame.finished = false;
simonGame.points = -1;
simonGame.round = [];
simonGame.combinations;
/*

*/
simonGame.initialize = function()
{
	this.points = 0;
	this.combinations = 1;
	this.finished = false;
}


/*

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
	

	for(var x = 0; x < this.combinations; x++)
	{
		this.round[x] = Math.floor((Math.random() * (this.simonBoard.length)) + 1);
	}
}

/*
	Adds another button to the Game Board
*/
simonGame.addButton = function(color)
{
	if(this.finished){return;}
	this.simonBoard.push(color);
}

/*
	Swaps the buttons on the game board around
*/
simonGame.swapSpaces = function()
{
	if(this.finished){return;}
	for(var x = 0; x < this.simonBoard.length; x++)
	{
		this.swapSpace = Math.floor((Math.random() * (this.simonBoard.length)) + 1)
		this.temp = this.simonBoard[swapSpace];
		this.simonBoard[swapSpace] = this.simonBoard[x];
		this.simonBoard[x] = this.temp;
	}
}

simonGame.getBoard = function()
{
	return simonBoard;
}

simonGame.getSequence = function()
{
	return round;
}

/*
	input - an int that represents what button was pressed
	Checks to make sure the user clicked the correct button
*/
simonGame.check = function(userin)
{
	if(this.finished){return;}
	if(userin == this.round.shift())
	{
		return true;
	}
	else
	{
		this.gameOver();
		return false;
	}
}

simonGame.gameOverLogic = function()
{
	this.finished = true;
}