
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject= ""; /* armazenar o objeto da imagem do personagem */
var blockImageObject= ""; /* armazenar o objeto da imagem dos blocos */

function playerUpdate()  /* adicionar a imagem do personagem */
{
	fabric.Image.fromURL("player.png", function(Img) 
	{
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage) /* adicionar as diferentes imagens de acordo com as teclas específicas pressionadas */
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if(e.shiftKey == true && keyPressed == '80')
	{
		console.log("p e shfit pressionadas juntas");
		blockImageWidth = blockImageWidth + 10;
		blockImageHeight = blockImageHeight + 10;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeight").innerHTML = blockImageHeight;
	}

	if(e.shiftKey && keyPressed == '77')
	{
		console.log("m e shfit pressionadas juntas");
		blockImageWidth = blockImageWidth - 10;
		blockImageHeight = blockImageHeight - 10;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeight").innerHTML = blockImageHeight;
	}

	if(keyPressed == '87')
	{
		up();
		console.log("cima");
	}

	if(keyPressed == '83')
	{
		down();
		console.log("baixo");
	}

	if(keyPressed == '65')
	{
		left();
		console.log("esquerda");
	}

	if(keyPressed == '68')
	{
		right();
		console.log("direita");
	}

	if(keyPressed == '90')
	{
		newImage('wall.jpg');
		console.log("z");
	}

	if(keyPressed == '71')
	{
		newImage('ground.png');
		console.log("g");
	}

	if(keyPressed == '76')
	{
		newImage('light_green.png');
		console.log("l");
	}

	if(keyPressed == '84')
	{
		newImage('trunk.jpg');
		console.log("t");
	}

	if(keyPressed == '89')
	{
		newImage('yellow_wall.png');
		console.log("y");
	}

	if(keyPressed == '68')
	{
		newImage('dark_green.png');
		console.log("d");
	}

	if(keyPressed == '85')
	{
		newImage('unique.png');
		console.log("u");
	}

	if(keyPressed == '67')
	{
		newImage('cloud.jpg');
		console.log("c");
	}

}

function up()
{
	if(playerY >= 0)
	{
		playerY = playerY - blockImageHeight;
		console.log("A altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional cima for pressionada, X = " + playerX + " , Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down()
{
	if(playerY <= 500)
	{
		playerY = playerY + blockImageHeight;
		console.log("A altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional baixo for pressionada, X = " + playerX + " , Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left()
{
	if(playerX > 0)
	{
		playerX = playerX - blockImageWidth;
		console.log("A altura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional esquerda for pressionada, X = " + playerX + " , Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right()
{
	if(playerX <= 900)
	{
		playerX = playerX + blockImageWidth;
		console.log("A altura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional direita for pressionada, X = " + playerX + " , Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}