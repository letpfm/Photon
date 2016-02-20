var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 16;
var x = canvas.width/2;
var y = canvas.height-36;
var dx = 6;
var dy = -7;
var j = 0;
var touch = false;
var A = [];
A[4] = {x:0,y:0,a:0}
var lives = 4;

function color(){
	A[0]=Math.round(Math.random()*255);
	A[1]=Math.round(Math.random()*255);
	A[2]=Math.round(Math.random()*255);
	A[3]=Math.random()*3;
}
color();
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


function ballrect() {
	
	if(j==1){drawRect(A,x,y,ballRadius);}else{drawBall(A,x,y,ballRadius);}
	
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
	}

	if (y + dy < ballRadius+35) {
		dy = -dy;
	} else if (y + dy > canvas.height-ballRadius-paddleHeight && x > paddleX && x < paddleX+paddleWidth && dy > 0) {
			a = 1;
			dy = -dy;
	} else if (y + dy > canvas.height-ballRadius) {
		if (lives>1){
		A[4] = {x: x, y: y};
		A[4].a=1;
		} else {
				alert('GAME OVER'+'\n'+" Score: "+score);
				gamenull();
			}
	}

	if (ballRadius>20) {
	ballRadius--;
	} else if (ballRadius<16) {
	ballRadius++;
	}
	
	if (A[4].y > canvas.height-90){
		dy = -7;
		ctx.font = "bold 60px Arial";
		ctx.fillStyle = "#ff0000";
		ctx.fillText("-", A[4].x, A[4].y);
		A[0]=139;
		A[1]=0;
		A[2]=0;
		A[3]=1;
		A[4].y--;
	}else if(A[4].y==canvas.height-90){
		color();
		A[4].y--;
	} else {
		if(A[4].a==1){lives--;A[4].a=0;}
		r = Math.random();
		if(r<0.01){j=1;}else if(r>0.98&&r<0.99){j=0;}
		x += dx;
		y += dy;
		ballRadius+=Math.random()-Math.random();
		if (Math.random()<0.04){
			color();
		}
	}
}

function Win(){
	r = Math.random();
	if(r<0.01){j=1;}else if(r>0.98&&r<0.99){j=0;}
	if(j==1){drawRect(A, x, y, ballRadius);}else{drawBall(A, x, y, ballRadius);}

    if(x+dx>canvas.width-ballRadius||x+dx<ballRadius){dx=-dx*Math.random();}
	if(y+dy<ballRadius+35||y+dy>canvas.height-ballRadius){dy=-dy*Math.random();}

	if (Math.random()<0.04) {
		color();
    }

	if(ballRadius>30){ballRadius--;}else if(ballRadius<17){ballRadius++;}
    
	if(dx>15){dx--;}else if(dx<-15){dx++;}
	if(dy>15){dy--;}else if(dy<-15){dy++;}
	
	x+=dx;y+=dy;
	dx+=Math.random()-Math.random();dy+=Math.random()-Math.random();
	ballRadius+=Math.random()-Math.random();
}