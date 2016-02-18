function Menu() {
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, brickOffsetTop-5);
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fill();
	ctx.closePath();
	
    ctx.font = "bold 20px Comic Sans MS";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("SCORE:"+score, 5, 20);
	
	ctx.font = "bold 47px Arial";
    ctx.fillStyle = "#8B0000";
    ctx.fillText('♥', 152, 28);
	
	ctx.font = "bold 16px Comic Sans MS";
    ctx.fillStyle = "rgb("+A[0]+","+A[1]+","+A[2]+")";
    ctx.fillText(lives, 160, 19);
	
}