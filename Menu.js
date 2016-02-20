var score1;
var livesx=160;
var livesy=19;
var livesh=16;

function Menu() {	
	if(win==1){
		lives='∞';
		livesx='149';
		livesy='26';
		livesh='40';
		score1='U WIN!!';
	}else{
		score1="SCORE:"+score;
	}
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, 35);
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fill();
	ctx.closePath();
		
    ctx.font = "bold 20px Comic Sans MS";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(score1, 5, 20);
	
	ctx.font = "bold 47px Arial";
    ctx.fillStyle = "#8B0000";
    ctx.fillText('♥', 152, 28);
	
	ctx.font = "bold "+livesh+"px Comic Sans MS";
    ctx.fillStyle = "rgb("+A[0]+","+A[1]+","+A[2]+")";
    ctx.fillText(lives, livesx, livesy);

}