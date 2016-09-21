//Rony Singh - 2778270
//////////////////////
//Sources for images//
//Lava.png -http://www.reinerstilesets.de/new-textures-lava/
//Table.png -http://opengameart.org/content/stone-ground-tileable-texture -Edited by Rony Singh
//Floor.png-http://siren0815.deviantart.com/art/Wood-Flooring-Texture-420971524 -Edited by Rony Singh
//////////////////////
//Coordinates for each shape
//Red
var redX = 250;
var redY = 250;
//Blue
var blueX = 410;
var blueY = 410;
//Yellow
var yellowX = 410;
var yellowY = 250;
//Green
var greenX = 250;
var greenY = 410;
//These are empty for now because they're not added to the game yet.
////////////////////////////////////////////////////////////////////
//Cyan
var cyanX = 0;
var cyanY = 0;
//Grey
var greyX = 0;
var greyY = 0;
//Brown
var brownX = 0;
var brownY = 0;
//Orange
var orangeX = 0;
var orangeY = 0;
//Purple
var purpleX = 0;
var purpleY = 0;
/////////////////////////////////////////////////////////////////////
//Objects creates to be used.
//Objects for the colors.
var red,blue,yellow,green,cyan,brown,grey,orange,purple;
//Objects for the backgrounds as well as the shadows for each object.
var table,floor,lava,over,s1,s2,s3,s4,s5,s6,s7,s8,s9;
//Sets the current color to be return to the game logic and sounds
var currentColor ="";
//Marks which stage the game is in
var st=0;
//Mouse coordinates for events
var mouseX=0;//Mouse X-Coordinates
var mouseY=0;//Mouse Y-Coordinates
//Background object
var background;
//Buttons for the shapes that start the game
var btnred = new Button(0,0,0,0);
var btnyellow = new Button(0,0,0,0);
var btngreen = new Button(0,0,0,0);
var btnblue = new Button(0,0,0,0);
//End of first 4 buttons
//Next 5 buttons for later on.
var btncyan = new Button(0,0,0,0);
var btnbrown = new Button(0,0,0,0);
var btngrey = new Button(0,0,0,0);
var btnorange = new Button(0,0,0,0);
var btnpurple = new Button(0,0,0,0);
//Buttons for start menu and replay button.
var btnstart = new Button(0,0,0,0);
var btnover = new Button(0,0,0,0);
//Canvas that is created. Has a start function to create the object.
var board = 
{
    canvas : document.createElement("canvas"),//Canvas
    start : function() //Start function
	{
        this.canvas.width = 800;//Width
        this.canvas.height = 800;//Height
        this.context = this.canvas.getContext("2d");//Type of canvas
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
//Menu that starts the game. Main menu.
function startMenu()
{
	board.start();//Creates the canvas.
	background = new drawbackground(800, 800, "Colors/mainMenu.png", 0, 0, "background");//Draws the start menu background
    btnstart = new Button(250,550,500,600);
	document.addEventListener('mousedown',mouseClicked,false);//Makes it so that mouse detection is a thing.
	//Reacts to mouse down and calls mouseClicked to see if it was clicked within bounds.
}
//Game over menu
function gameOverGraphic()
{
	board.start();//Creates the canvas
	//Makes all the colored buttons unavailable for the time being
	btnred = new Button(0,0,0,0);
	btnyellow = new Button(0,0,0,0);
	btngreen = new Button(0,0,0,0);
	btnblue = new Button(0,0,0,0);
	btncyan = new Button(0,0,0,0);
	btnbrown = new Button(0,0,0,0);
	btngrey = new Button(0,0,0,0);
	btnorange = new Button(0,0,0,0);
	btnpurple = new Button(0,0,0,0);
	btnstart = new Button(0,0,0,0);
	//
	btnover = new Button(250,550,500,600);//Makes the button have the correct location
	background = new drawbackground(800, 800, "Colors/Over.png", 0, 0, "background");//Draws background
	document.addEventListener('mousedown',mouseClicked,false);//Makes it so that mouse detection is a thing.
}
function startGameOne()//Starts the first few rounds of the game
{
	board.start();//Creates the canvas
	//The background floor and table is created
	floor = new object(800, 800, "Colors/Floor.png", 0, 0, "image");
	table = new object(800, 800, "Colors/Table.png", 0, 0, "image");
	//Drawing the shadow first so that's behind the button.
	//The Red button is created with it's shadow behind it.
	s1 = new object(150, 150, "Colors/Shade.png", redX -5, redY +5, "image");
    red = new object(150, 150, "Colors/Redb.png", redX, redY, "image");
	//The Yellow button is created with it's shadow behind it.
	s2 = new object(150, 150, "Colors/Shade.png", yellowX -5, yellowY +5, "image");
	yellow = new object(150, 150, "Colors/Yellowb.png", yellowX, yellowY, "image");
	//The Green button is created with it's shadow behind it.
	s3 = new object(150, 150, "Colors/Shade.png",greenX -5, greenY +5, "image");
    green = new object(150, 150, "Colors/Greenb.png", greenX, greenY, "image");
	//The Blue button is created with it's shadow behind it.
	s4 = new object(150, 150, "Colors/Shade.png", blueX -5, blueY +5, "image");
    blue = new object(150, 150, "Colors/Blueb.png", blueX, blueY, "image");
//////////////////////////////////////////////
//Creates the buttons over the correct buttons
	btnred = new Button(redX,redX+150,redY,redY+150);
	btnyellow = new Button(yellowX,yellowX+150,yellowY,yellowY+150);
	btngreen = new Button(greenX,greenX+150,greenY,greenY+150);
	btnblue = new Button(blueX,blueX+150,blueY,blueY+150);
	//
	document.addEventListener('mousedown',mouseClicked,false);//Mouse detection
}
function startGameTwo()//Starts game two where there's more pieces
{
	board.start();//Creates canvas
	//Updates all the coordinates so that they make a 3x3 board
	redX = 165;        //Top Left
	redY = 165;

	blueX = 325;       //Top Middle
	blueY = 165;

	yellowX = 485;	   //Top Right
	yellowY = 165;

	greenX = 165;	   //Middle Left
	greenY = 325;

	cyanX = 325;	   //Center
	cyanY = 325;

	brownX = 485;	   //Middle Right
	brownY = 325;

	greyX = 165;	   //Bottom Left
	greyY = 485;

	orangeX = 325;	   //Bottom Middle
	orangeY = 485;

	purpleX = 485;	   //Bottom Right
	purpleY = 485;
	//Draws the lava background
	lava = new object(800, 800, "Colors/Lava.png", 0, 0, "image");
	//Red button and shadow
	s1 = new object(150, 150, "Colors/Shade.png", redX -5, redY +5, "image");
    red = new object(150, 150, "Colors/Redb.png", redX, redY, "image");
	//Yellow button and shadow
	s2 = new object(150, 150, "Colors/Shade.png", yellowX -5, yellowY +5, "image");
	yellow = new object(150, 150, "Colors/Yellowb.png", yellowX, yellowY, "image");
	//Green button and shadow
	s3 = new object(150, 150, "Colors/Shade.png",greenX -5, greenY +5, "image");
    green = new object(150, 150, "Colors/Greenb.png", greenX, greenY, "image");
	//Blue button and shadow
	s4 = new object(150, 150, "Colors/Shade.png", blueX -5, blueY +5, "image");
    blue = new object(150, 150, "Colors/Blueb.png", blueX, blueY, "image");
	//Cyan button and shadow
	s5 = new object(150, 150, "Colors/Shade.png", cyanX -5, cyanY +5, "image");
    cyan = new object(150, 150, "Colors/Cyanb.png", cyanX, cyanY, "image");
	//Brown button and shadow
	s6 = new object(150, 150, "Colors/Shade.png", brownX -5, brownY +5, "image");
	brown = new object(150, 150, "Colors/Brownb.png", brownX, brownY, "image");
	//Grey button and shadow
	s7 = new object(150, 150, "Colors/Shade.png",greyX -5, greyY +5, "image");
    grey = new object(150, 150, "Colors/Greyb.png", greyX, greyY, "image");
	//Orange button and shadow
	s8 = new object(150, 150, "Colors/Shade.png", orangeX -5, orangeY +5, "image");
    orange = new object(150, 150, "Colors/Orangeb.png", orangeX, orangeY, "image");
	//Purple button and shadow
	s9 = new object(150, 150, "Colors/Shade.png", purpleX -5, purpleY +5, "image");
    purple = new object(150, 150, "Colors/Purpleb.png", purpleX, purpleY, "image");
	//Buttons for each color.
	//Created at the respective coordinates.
	btnred = new Button(redX,redX+150,redY,redY+150);						//Red
	btnyellow = new Button(yellowX,yellowX+150,yellowY,yellowY+150);		//Yellow
	btngreen = new Button(greenX,greenX+150,greenY,greenY+150);				//Green
	btnblue = new Button(blueX,blueX+150,blueY,blueY+150);					//Blue
	btncyan = new Button(cyanX,cyanX+150,cyanY,cyanY+150);					//Cyan
	btnbrown = new Button(brownX,brownX+150,brownY,brownY+150);				//Brown
	btngrey = new Button(greyX,greyX+150,greyY,greyY+150);					//Grey
	btnorange = new Button(orangeX,orangeX+150,orangeY,orangeY+150);		//Orange
	btnpurple = new Button(purpleX,purpleX+150,purpleY,purpleY+150);		//Purple
	//
	document.addEventListener('mousedown',mouseClicked,false);				//Mouse detection
}
function startGameThree()//Starts game three, moving shapes.
{
	board.start();//Creates the canvas
	//Marks the stage
    st =3;
	//List of all the possible coordinates to be randomized
	var list = [[165,165],[325,165],[485,165],[165,325],[325,325],[485,325],[165,485],[325,485],[485,485]];
	//Random variable chosen from the list
	var x = (Math.floor(Math.random() * list.length) + 0);
	//Randomizes the coordinates of the shapes
	//////////////////////////////////////////
	redX = list[x][0];//Choose the first index of the list in the random value - X
	redY = list[x][1];//Choose the second index of the list in the random value- Y
	//
	list.splice(x,1);//Remove that coordinate so that it cannot be reused
	x = (Math.floor(Math.random() * list.length) + 0);//Get another random color coordinate
	//
	blueX = list[x][0];//X
	blueY = list[x][1];//Y
	//
	list.splice(x,1);//Remove that coordinate so that it cannot be reused
	x = (Math.floor(Math.random() * list.length) + 0);//Get another random color coordinate
	yellowX = list[x][0];//X
	yellowY = list[x][1];//Y
	//
	list.splice(x,1);//Remove that coordinate so that it cannot be reused
	x = (Math.floor(Math.random() * list.length) + 0);//Get another random color coordinate

	greenX = list[x][0];//X
	greenY = list[x][1];//Y
	//
	list.splice(x,1);//Remove that coordinate so that it cannot be reused
	x = (Math.floor(Math.random() * list.length) + 0);//Get another random color coordinate

	cyanX = list[x][0];//X
	cyanY = list[x][1];//Y
	//
	list.splice(x,1);//Remove that coordinate so that it cannot be reused
	x = (Math.floor(Math.random() * list.length) + 0);//Get another random color coordinate

	brownX = list[x][0];//X
	brownY = list[x][1];//Y
	//
	list.splice(x,1);//Remove that coordinate so that it cannot be reused
	x = (Math.floor(Math.random() * list.length) + 0);//Get another random color coordinate

	greyX =  list[x][0];//X
	greyY =  list[x][1];//Y
	//
	list.splice(x,1);//Remove that coordinate so that it cannot be reused
	x = (Math.floor(Math.random() * list.length) + 0);//Get another random color coordinate

	orangeX = list[x][0];//X
	orangeY = list[x][1];//Y
	//
	list.splice(x,1);//Remove that coordinate so that it cannot be reused
	x = 0;//X is now zero for the last value
	purpleX = list[x][0];//X
	purpleY = list[x][1];//Y
	///////////////////////////
	//Draws background Lava
	lava = new object(800, 800, "Colors/Lava.png", 0, 0, "image");
	//Red
	s1 = new object(150, 150, "Colors/Shade.png", redX -5, redY +5, "image");
    red = new object(150, 150, "Colors/Redb.png", redX, redY, "image");
	//Yellow
	s2 = new object(150, 150, "Colors/Shade.png", yellowX -5, yellowY +5, "image");
	yellow = new object(150, 150, "Colors/Yellowb.png", yellowX, yellowY, "image");
	//Green
	s3 = new object(150, 150, "Colors/Shade.png",greenX -5, greenY +5, "image");
    green = new object(150, 150, "Colors/Greenb.png", greenX, greenY, "image");
	//Blue
	s4 = new object(150, 150, "Colors/Shade.png", blueX -5, blueY +5, "image");
    blue = new object(150, 150, "Colors/Blueb.png", blueX, blueY, "image");
	//Cyan
	s5 = new object(150, 150, "Colors/Shade.png", cyanX -5, cyanY +5, "image");
    cyan = new object(150, 150, "Colors/Cyanb.png", cyanX, cyanY, "image");
	//Brown
	s6 = new object(150, 150, "Colors/Shade.png", brownX -5, brownY +5, "image");
	brown = new object(150, 150, "Colors/Brownb.png", brownX, brownY, "image");
	//Grey
	s7 = new object(150, 150, "Colors/Shade.png",greyX -5, greyY +5, "image");
    grey = new object(150, 150, "Colors/Greyb.png", greyX, greyY, "image");
	//Ornage
	s8 = new object(150, 150, "Colors/Shade.png", orangeX -5, orangeY +5, "image");
    orange = new object(150, 150, "Colors/Orangeb.png", orangeX, orangeY, "image");
	//Purple
	s9 = new object(150, 150, "Colors/Shade.png", purpleX -5, purpleY +5, "image");
    purple = new object(150, 150, "Colors/Purpleb.png", purpleX, purpleY, "image");
	//Buttons
	btnred = new Button(redX,redX+150,redY,redY+150);					//Red
	btnyellow = new Button(yellowX,yellowX+150,yellowY,yellowY+150);	//Yellow
	btngreen = new Button(greenX,greenX+150,greenY,greenY+150);			//Green
	btnblue = new Button(blueX,blueX+150,blueY,blueY+150);				//Blue
	btncyan = new Button(cyanX,cyanX+150,cyanY,cyanY+150);				//Cyan
	btnbrown = new Button(brownX,brownX+150,brownY,brownY+150);			//Brown
	btngrey = new Button(greyX,greyX+150,greyY,greyY+150);				//Grey
	btnorange = new Button(orangeX,orangeX+150,orangeY,orangeY+150);	//Orange
	btnpurple = new Button(purpleX,purpleX+150,purpleY,purpleY+150);	//Purple
	//
	document.addEventListener('mousedown',mouseClicked,false);			//Mouse detection
}
//This function keeps changing the location of the buttons by simply recreation the board.
function randomCoordinates()
{
	startGameThree();
}
//Method for the object to be added.
function object(width, height, color, x, y, type) 
{
    this.type = type;//Sets type
    this.width = width;//Sets width
    this.height = height;//Sets height
    this.x = x;//Sets X coordinate
    this.y = y;//Sets Y coordinate
	if (type == "image") 
	{
        this.image = new Image();
        this.image.src = color;
    }
	if (type == "background")
	{
        this.image = new Image();
        this.image.src = color;
    }       
	ctx = board.context;//Gets the board.
	if (type == "image") //Draws image
	{
		ctx.drawImage(this.image,this.x,this.y,this.width, this.height);
	}
}
//Same thing as object but for background
function drawbackground(width, height, color, x, y, type)
{
	this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
	if (type == "background") 
	{
        this.image = new Image();
        this.image.src = color;
    }       
	ctx = board.context;
	ctx.drawImage(this.image,this.x,this.y,this.width, this.height);
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//These functions make the flashed object back to the original color. 
//If the stage is 3, change the location of the buttons.
//These will also return info back to the HTML method.
function flashRed()
{
	red = new object(150, 150, "Colors/Redb.png", redX, redY, "image");
	if(st==3)
	{
		randomCoordinates();
	}
	return(getCurrentColor());
}
function flashYellow()
{
	yellow = new object(150, 150, "Colors/Yellowb.png", yellowX, yellowY, "image");
	if(st==3)
	{
		randomCoordinates();
	}
	return(getCurrentColor());
}
function flashGreen()
{
	green = new object(150, 150, "Colors/Greenb.png", greenX, greenY, "image");
	if(st==3)
	{
		randomCoordinates();
	}
	return(getCurrentColor());
}
function flashBlue()
{
	blue = new object(150, 150, "Colors/Blueb.png", blueX, blueY, "image");
	if(st==3)
	{
		randomCoordinates();
	}
	return(getCurrentColor());
}
function flashCyan()
{
	cyan = new object(150, 150, "Colors/Cyanb.png", cyanX, cyanY, "image");
	if(st==3)
	{
		randomCoordinates();
	}
	return(getCurrentColor());
}
function flashBrown()
{
	brown = new object(150, 150, "Colors/Brownb.png", brownX, brownY, "image");
	if(st==3)
	{
		randomCoordinates();
	}
	return(getCurrentColor());
}
function flashGrey()
{
	grey = new object(150, 150, "Colors/Greyb.png", greyX, greyY, "image");
	if(st==3)
	{
		randomCoordinates();
	}
	return(getCurrentColor());
}
function flashOrange()
{
	orange = new object(150, 150, "Colors/Orangeb.png", orangeX, orangeY, "image");
	if(st==3)
	{
		randomCoordinates();
	}
	return(getCurrentColor());
}
function flashPurple()
{
	purple = new object(150, 150, "Colors/Purpleb.png", purpleX, purpleY, "image");
	if(st==3)
	{
		randomCoordinates();
	}
	return(getCurrentColor());
}
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//Checks for mouse events.
function mouseClicked(e)
{
	mouseX = e.pageX - ctx.canvas.offsetLeft;//X is the page minus the canvas left
	mouseY = e.pageY - ctx.canvas.offsetTop;//Y is the page minus the canvas top
	if(btnred.checkClicked())//Checks if red is clicked
	{
		startFlashRed();
	}
	if(btnyellow.checkClicked())//Checks if yellow is clicked
	{
		startFlashYellow();		
	}
	if(btngreen.checkClicked())//Checks if green is clicked
	{
		startFlashGreen();		
	}
	if(btnblue.checkClicked())//Checks if blue is clicked
	{
		startFlashBlue();
	}
	if(btncyan.checkClicked())//Checks if cyan is clicked
	{
		startFlashCyan();		
	}
	if(btnbrown.checkClicked())//Checks if brown is clicked
	{
		startFlashBrown();		
	}
	if(btngrey.checkClicked())//Checks if grey is clicked
	{
		startFlashGrey();		
	}
	if(btnorange.checkClicked())//Checks if orange is clicked
	{
		startFlashOrange();
	}
	if(btnpurple.checkClicked())//Checks if purple is clicked
	{
		startFlashPurple();
	}
	if(btnstart.checkClicked())//Checks if the start button is clicked
	{
		startGameOne();//Starts stage one
		//Makes the button unclickable
		btnstart.xleft = 0;
		btnstart.xright = 0;
		btnstart.ytop =0;
		btnstart.ybottom = 0;
	}
	if(btnover.checkClicked())//Checks if the over button is clicked
	{
		location.reload();
		//Makes it unclickable
		btnover.xleft = 0;
		btnover.xright = 0;
		btnover.ytop =0;
		btnover.ybottom = 0;
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function calls to start the flashing////////////////////////////////////////////////////////////////////
function startFlashRed()//Red
{
	currentColor = "red";//Sets current color
	red = new object(150, 150, "Colors/Red.png", redX, redY, "image");//Make it flash
	setTimeout(flashRed, 300);//Call it after a delay to react to the click.
}
function startFlashYellow()//Yellow
{
	currentColor = "yellow";//Sets current color
	yellow = new object(150, 150, "Colors/Yellow.png", yellowX, yellowY, "image");//Make it flash
	setTimeout(flashYellow, 300);//Call it after a delay to react to the click.
}
function startFlashGreen()//Green
{
	currentColor = "green";//Sets current color
	green = new object(150, 150, "Colors/Green.png", greenX, greenY, "image");//Make it flash
	setTimeout(flashGreen, 300);//Call it after a delay to react to the click.
}
function startFlashBlue()//Blue
{
	currentColor = "blue";//Sets current color
	blue = new object(150, 150, "Colors/Blue.png", blueX, blueY, "image");//Make it flash
	setTimeout(flashBlue, 300);//Call it after a delay to react to the click.
}
function startFlashCyan()//Cyan
{
	currentColor = "cyan";//Sets current color
	cyan = new object(150, 150, "Colors/Cyan.png",cyanX, cyanY,"image");//Make it flash
	setTimeout(flashCyan, 300);	//Call it after a delay to react to the click.
}
function startFlashBrown()//Brown
{
	currentColor = "brown";//Sets current color
	brown = new object(150, 150, "Colors/Brown.png",  brownX, brownY, "image");//Make it flash
	setTimeout(flashBrown, 300);//Call it after a delay to react to the click.
}
function startFlashGrey()//Grey
{
	currentColor = "grey";//Sets current color
	grey = new object(150, 150, "Colors/Grey.png",  greyX, greyY, "image");//Make it flash
	setTimeout(flashGrey, 300);//Call it after a delay to react to the click.
}
function startFlashOrange()//Orange
{
	currentColor = "orange";//Sets current color
	orange = new object(150, 150, "Colors/Orange.png", orangeX, orangeY, "image");//Make it flash
	setTimeout(flashOrange, 300);//Call it after a delay to react to the click.
}
function startFlashPurple()//Purple
{
	currentColor = "purple";//Sets current color
	purple = new object(150, 150, "Colors/Purple.png", purpleX, purpleY, "image");//Make it flash
	setTimeout(flashPurple, 300);//Call it after a delay to react to the click.
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Button object with the coordinates.
function Button(xL,xR,yT,yB)
{
	this.xleft = xL;
	this.xright = xR;
	this.ytop = yT;
	this.ybottom = yB;
}
//Returns the current color when it is called
function getCurrentColor()
{
	return(currentColor);
}
//Button prototype function to check if the button was clicked
Button.prototype.checkClicked = function()
{
	//If the mouse X and mouse Y are in the bounds of the button, return true.
	if(this.xleft <= mouseX && mouseX <=this.xright && this.ytop <= mouseY && mouseY <= this.ybottom) return true;
};
