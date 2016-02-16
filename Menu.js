function Menu() {
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, brickOffsetTop-5);
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fill();
	ctx.closePath();
	
    ctx.font = "bold 20px Comic Sans MS";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("SCORE:"+score, 5, 20);
}