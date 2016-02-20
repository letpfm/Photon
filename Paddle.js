var paddleHeight = 20;
var paddleWidth = 80;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var i = [0,0,0];
var I = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = 'rgb('+i[0]+','+i[1]+','+i[2]+')';
    ctx.fill();
    ctx.closePath();
	
	i = [0,0,0];
	i[I] = 255;
	I++;
	if (I==3) {
		I=0;
	}
	
	if (rightPressed && paddleX < canvas.width-paddleWidth) {
		paddleX += 9;
	} else if (leftPressed && paddleX > 0) {
		paddleX -= 9;
	}
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}