var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 16;
var x = canvas.width/2;
var y = canvas.height-36;
var dx = 3.5;
var dy = -3.5;
var r = Math.random();
var j = 0;
var touch = false;
var A = [];
A[0] = Math.round(Math.random()*255);
A[1] = Math.round(Math.random()*255);
A[2] = Math.round(Math.random()*255);
A[3] = Math.random() * 3;

function drawBall(A, x, y, ballRadius) {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "rgba("+A[0]+","+A[1]+","+A[2]+","+A[3]+")";
    ctx.fill();
    ctx.closePath();
}

function drawRect(A, x, y, ballRadius) {
	ctx.beginPath();
	ctx.rect(x-ballRadius, y-ballRadius, ballRadius*2, ballRadius*2);
	ctx.fillStyle = "rgba("+A[0]+","+A[1]+","+A[2]+","+A[3]+")";
	ctx.fill();
	ctx.closePath();
}

function random () {
	r = Math.random();
	if (r<0.01) {
	j=1;
    } else if (r > 0.98 && r < 0.99) {
	j=0;
	}
	if (j == 1) {
	drawRect(A, x, y, ballRadius);
    } else {
	drawBall(A, x, y, ballRadius);
	}

    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
	}

	if (y + dy < brickOffsetTop-5) {
		dy = -dy;
	} else if (y + dy > canvas.height-ballRadius-paddleHeight && x > paddleX && x < paddleX+paddleWidth && dy > 0) {
			a = 1;
			dy = -dy;
	} else if (y + dy > canvas.height-ballRadius) {
		alert('GAME OVER'+'\n'+" Score: "+score);
		document.location.reload();
	}

	if (Math.random()<0.04) {
	A[0]=Math.round(Math.random()*255);
	A[1]=Math.round(Math.random()*255);
	A[2]=Math.round(Math.random()*255);
	A[3]=Math.random()*3;
    }

	if (ballRadius>20) {
	ballRadius--;
	} else if (ballRadius<16) {
	ballRadius++;
	}

    x += dx;
    y += dy;
	ballRadius+=r-Math.random();
}
